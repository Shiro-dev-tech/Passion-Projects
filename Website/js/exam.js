// ========================================
// CCST NETWORKING EXAM
// exam.js
// ========================================

const EXAM_TIME_MINUTES = 50;

let currentQuestion = 0;

let flaggedQuestions =
    new Array(questions.length).fill(false);

let timeRemaining =
    EXAM_TIME_MINUTES * 60;

let timerInterval;


// ========================================
// CREATE ANSWER STORAGE
// ========================================

let userAnswers = questions.map(function (question) {

    // Choose 2 / multiple-answer question
    if (question.type === "multiple") {
        return [];
    }

    // Matching question
    if (question.type === "matching") {

        return new Array(
            question.items.length
        ).fill("");
    }

    // Normal single-answer question
    return null;
});


// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

    const question =
        questions[currentQuestion];
        updateExhibitButton(question);


    // Question number
    document.getElementById(
        "question-number"
    ).textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    // Question text
    document.getElementById(
        "question-text"
    ).textContent =
        question.question;


    const instruction =
        document.getElementById(
            "question-instruction"
        );


    const answerContainer =
        document.getElementById(
            "answer-container"
        );


    answerContainer.innerHTML = "";


    // ========================================
    // MATCHING QUESTION
    // ========================================

    if (question.type === "matching") {

        instruction.textContent =
            "Match each item with the correct answer.";


        question.items.forEach(
            function (item, itemIndex) {

                const row =
                    document.createElement("div");

                row.className =
                    "matching-row";


                // Left side label
                const label =
                    document.createElement("strong");

                label.textContent =
                    item.label;


                // Dropdown
                const select =
                    document.createElement("select");


                // Blank option
                const blankOption =
                    document.createElement("option");

                blankOption.value = "";

                blankOption.textContent =
                    "-- Select an answer --";

                select.appendChild(
                    blankOption
                );


                // Add matching options
                question.options.forEach(
                    function (option) {

                        const optionElement =
                            document.createElement(
                                "option"
                            );

                        optionElement.value =
                            option;

                        optionElement.textContent =
                            option;

                        select.appendChild(
                            optionElement
                        );

                    }
                );


                // Restore selected answer
                select.value =
                    userAnswers[
                        currentQuestion
                    ][itemIndex];


                // Save answer
                select.addEventListener(
                    "change",
                    function () {

                        userAnswers[
                            currentQuestion
                        ][itemIndex] =
                            select.value;

                        updateQuestionNavigator();

                    }
                );


                row.appendChild(label);

                row.appendChild(select);

                answerContainer.appendChild(
                    row
                );

            }
        );
    }


    // ========================================
    // SINGLE / MULTIPLE CHOICE
    // ========================================

    else {

        if (question.type === "multiple") {

            instruction.textContent =
                "Choose " +
                question.required +
                " answers.";

        } else {

            instruction.textContent =
                "Select the best answer.";
        }


        question.choices.forEach(
            function (choice, index) {

                const label =
                    document.createElement(
                        "label"
                    );

                label.className =
                    "answer-option";


                const input =
                    document.createElement(
                        "input"
                    );


                // MULTIPLE ANSWER
                if (
                    question.type ===
                    "multiple"
                ) {

                    input.type =
                        "checkbox";

                    input.checked =
                        userAnswers[
                            currentQuestion
                        ].includes(index);
                }


                // SINGLE ANSWER
                else {

                    input.type =
                        "radio";

                    input.name =
                        "question-" +
                        currentQuestion;

                    input.checked =
                        userAnswers[
                            currentQuestion
                        ] === index;
                }


                // Highlight selected
                if (input.checked) {

                    label.classList.add(
                        "selected-answer"
                    );
                }


                // Save answer
                input.addEventListener(
                    "change",
                    function () {

                        if (
                            question.type ===
                            "multiple"
                        ) {

                            handleMultipleAnswer(
                                index
                            );

                        } else {

                            userAnswers[
                                currentQuestion
                            ] = index;
                        }


                        loadQuestion();

                    }
                );


                // A / B / C / D / E
                const letter =
                    String.fromCharCode(
                        65 + index
                    );


                const text =
                    document.createElement(
                        "span"
                    );


                text.textContent =
                    letter +
                    ". " +
                    choice;


                label.appendChild(input);

                label.appendChild(text);

                answerContainer.appendChild(
                    label
                );

            }
        );
    }


    updateFlagButton();

    updateQuestionNavigator();

    updateNavigationButtons();
}


// ========================================
// MULTIPLE ANSWER HANDLER
// ========================================

function handleMultipleAnswer(index) {

    const question =
        questions[currentQuestion];

    const answers =
        userAnswers[currentQuestion];

    const position =
        answers.indexOf(index);


    // Uncheck answer
    if (position !== -1) {

        answers.splice(
            position,
            1
        );

        return;
    }


    // Don't allow too many selections
    if (
        answers.length >=
        question.required
    ) {

        alert(
            "You may select only " +
            question.required +
            " answers."
        );

        return;
    }


    answers.push(index);
}


// ========================================
// NEXT
// ========================================

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();
    }
}


// ========================================
// PREVIOUS
// ========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();
    }
}


// ========================================
// NAVIGATION BUTTONS
// ========================================

function updateNavigationButtons() {

    const previousButton =
        document.getElementById(
            "previous-button"
        );

    const nextButton =
        document.getElementById(
            "next-button"
        );


    previousButton.disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.textContent =
            "Review";

    } else {

        nextButton.textContent =
            "Next";
    }
}


// ========================================
// FLAG QUESTION
// ========================================

function toggleFlag() {

    flaggedQuestions[
        currentQuestion
    ] =
        !flaggedQuestions[
            currentQuestion
        ];


    updateFlagButton();

    updateQuestionNavigator();
}


function updateFlagButton() {

    const button =
        document.getElementById(
            "flag-button"
        );


    if (
        flaggedQuestions[
            currentQuestion
        ]
    ) {

        button.textContent =
            "⚑ Flagged";

        button.classList.add(
            "flag-active"
        );

    } else {

        button.textContent =
            "⚑ Flag for Review";

        button.classList.remove(
            "flag-active"
        );
    }
}


// ========================================
// CREATE QUESTION NAVIGATOR
// ========================================

function createQuestionNavigator() {

    const grid =
        document.getElementById(
            "question-grid"
        );


    grid.innerHTML = "";


    questions.forEach(
        function (question, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                index + 1;


            button.className =
                "question-button";


            button.addEventListener(
                "click",
                function () {

                    currentQuestion =
                        index;

                    loadQuestion();

                }
            );


            grid.appendChild(
                button
            );

        }
    );
}


// ========================================
// CHECK IF QUESTION IS ANSWERED
// ========================================

function questionIsAnswered(index) {

    const question =
        questions[index];

    const answer =
        userAnswers[index];


    // Multiple answer
    if (
        question.type ===
        "multiple"
    ) {

        return (
            answer.length ===
            question.required
        );
    }


    // Matching
    if (
        question.type ===
        "matching"
    ) {

        return answer.every(
            function (value) {

                return value !== "";

            }
        );
    }


    // Single answer
    return answer !== null;
}


// ========================================
// UPDATE QUESTION NAVIGATOR
// ========================================

function updateQuestionNavigator() {

    const buttons =
        document.querySelectorAll(
            ".question-button"
        );


    buttons.forEach(
        function (button, index) {

            button.className =
                "question-button";


            // Current question
            if (
                index ===
                currentQuestion
            ) {

                button.classList.add(
                    "current"
                );
            }


            // Answered
            if (
                questionIsAnswered(index)
            ) {

                button.classList.add(
                    "answered"
                );
            }


            // Flagged
            if (
                flaggedQuestions[index]
            ) {

                button.classList.add(
                    "flagged"
                );
            }

        }
    );


    // ========================================
    // UPDATE COUNTERS
    // ========================================

    let answeredCount = 0;
    let flaggedCount = 0;


    questions.forEach(
        function (question, index) {

            if (
                questionIsAnswered(index)
            ) {

                answeredCount++;
            }


            if (
                flaggedQuestions[index]
            ) {

                flaggedCount++;
            }

        }
    );


    const unansweredCount =
        questions.length -
        answeredCount;


    const answeredElement =
        document.getElementById(
            "answered-count"
        );

    const flaggedElement =
        document.getElementById(
            "flagged-count"
        );

    const unansweredElement =
        document.getElementById(
            "unanswered-count"
        );


    if (answeredElement) {

        answeredElement.textContent =
            answeredCount;
    }


    if (flaggedElement) {

        flaggedElement.textContent =
            flaggedCount;
    }


    if (unansweredElement) {

        unansweredElement.textContent =
            unansweredCount;
    }
}


// ========================================
// TIMER
// ========================================

function startTimer() {

    updateTimerDisplay();


    timerInterval =
        setInterval(
            function () {

                timeRemaining--;

                updateTimerDisplay();


                if (
                    timeRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    submitExam(true);
                }

            },

            1000
        );
}


function updateTimerDisplay() {

    const minutes =
        Math.floor(
            timeRemaining / 60
        );

    const seconds =
        timeRemaining % 60;


    document.getElementById(
        "timer"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        ) +
        ":" +
        String(seconds).padStart(
            2,
            "0"
        );
}


// ========================================
// SUBMIT EXAM
// ========================================

function submitExam(timeExpired) {

    if (!timeExpired) {

        let unanswered = 0;


        questions.forEach(
            function (question, index) {

                if (
                    !questionIsAnswered(index)
                ) {

                    unanswered++;
                }

            }
        );


        let message =
            "Are you sure you want to submit your exam?";


        if (unanswered > 0) {

            message +=
                "\n\nYou have " +
                unanswered +
                " unanswered question(s).";
        }


        const confirmed =
            confirm(message);


        if (!confirmed) {

            return;
        }

    }


    // Stop timer

    clearInterval(
        timerInterval
    );


    // Stop exam music

    if (
        typeof stopBackgroundMusic ===
        "function"
    ) {

        stopBackgroundMusic();
    }


    // Play confirmation sound

    if (
        typeof playSound ===
        "function" &&
        typeof confirmSound !==
        "undefined"
    ) {

        playSound(confirmSound);
    }


    // Give confirmation sound
    // a moment before changing page

    setTimeout(
        function () {

            calculateResults();

        },
        650
    );
}


// ========================================
// COMPARE MULTIPLE ANSWERS
// ========================================

function arraysMatch(
    first,
    second
) {

    if (
        !Array.isArray(first) ||
        !Array.isArray(second)
    ) {

        return false;
    }


    if (
        first.length !==
        second.length
    ) {

        return false;
    }


    const a =
        [...first].sort(
            function (x, y) {

                return x - y;

            }
        );


    const b =
        [...second].sort(
            function (x, y) {

                return x - y;

            }
        );


    return a.every(
        function (value, index) {

            return (
                value ===
                b[index]
            );

        }
    );
}

// ========================================
// CHECK MATCHING QUESTION
// ========================================

function matchingAnswerIsCorrect(
    question,
    userAnswer
) {

    // Do not score questions that have
    // an unreliable or incomplete source.
    if (
        question.unverified ||
        question.sourceIssue
    ) {

        return false;
    }


    // Matching answers must be stored
    // inside an array.
    if (
        !Array.isArray(userAnswer)
    ) {

        return false;
    }


    // Number of answers must match
    // number of matching items.
    if (
        userAnswer.length !==
        question.items.length
    ) {

        return false;
    }


    // Every selected answer must match
    // the correct answer.
    return question.items.every(
        function (item, index) {

            return (
                userAnswer[index] ===
                item.answer
            );

        }
    );
}

// ========================================
// CALCULATE RESULTS
// ========================================

function calculateResults() {

    let correctAnswers = 0;


    // Count all questions that can
    // actually be scored.
    const scoredQuestions =
    questions.filter(
        function (question) {

            if (
                question.unverified ||
                question.sourceIssue
            ) {
                return false;
            }

            if (question.type === "matching") {
                return true;
            }

            return question.answer !== null;
        }
    ).length;


    questions.forEach(
        function (question, index) {

            const userAnswer =
                userAnswers[index];
                if(
                    question.unverified ||
                    question.sourceIssue
                ){
                    return;
                }
                
                


            // ==========================
            // MATCHING
            // ==========================

            if (
                question.type ===
                "matching"
            ) {

                if (
                    matchingAnswerIsCorrect(
                        question,
                        userAnswer
                    )
                ) {

                    correctAnswers++;
                }


                return;
            }


            // ==========================
            // UNSCORED
            // ==========================

            if (
                question.answer ===
                null
            ) {

                return;
            }


            // ==========================
            // MULTIPLE ANSWER
            // ==========================

            if (
                question.type ===
                "multiple"
            ) {

                if (
                    arraysMatch(
                        userAnswer,
                        question.answer
                    )
                ) {

                    correctAnswers++;
                }


                return;
            }


            // ==========================
            // SINGLE ANSWER
            // ==========================

            if (
                userAnswer ===
                question.answer
            ) {

                correctAnswers++;
            }

        }
    );


    // Prevent divide-by-zero
    const percentage =
        scoredQuestions > 0
            ? Math.round(
                (
                    correctAnswers /
                    scoredQuestions
                ) * 100
            )
            : 0;


    const scaledScore =
        scoredQuestions > 0
            ? Math.round(
                (
                    correctAnswers /
                    scoredQuestions
                ) * 1000
            )
            : 0;


    // ========================================
    // SAVE RESULT DATA
    // ========================================

    const resultData = {

        answers:
            userAnswers,

        flagged:
            flaggedQuestions,

        correct:
            correctAnswers,

        total:
            scoredQuestions,

        totalQuestions:
            questions.length,

        unscored:
            questions.length -
            scoredQuestions,

        percentage:
            percentage,

        scaledScore:
            scaledScore
    };


    localStorage.setItem(
        "ccstResult",
        JSON.stringify(
            resultData
        )
    );


    localStorage.setItem(
        "ccstQuestions",
        JSON.stringify(
            questions
        )
    );


    window.location.href =
        "results.html";
}

// ========================================
// EXHIBIT SYSTEM
// ========================================

function updateExhibitButton(question) {

    const container =
        document.getElementById(
            "exhibit-button-container"
        );


    if (question.exhibit) {

        container.style.display =
            "block";

    } else {

        container.style.display =
            "none";
    }
}


function openExhibit() {

    const question =
        questions[currentQuestion];


    if (!question.exhibit) {
        return;
    }


    const modal =
        document.getElementById(
            "exhibit-modal"
        );


    const image =
        document.getElementById(
            "exhibit-image"
        );


    image.src =
        question.exhibit;


    modal.classList.add(
        "show"
    );
}


function closeExhibit() {

    const modal =
        document.getElementById(
            "exhibit-modal"
        );


    modal.classList.remove(
        "show"
    );
}


// Close by clicking outside window

document
    .getElementById("exhibit-modal")
    .addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeExhibit();
            }

        }
    );


// Escape key closes exhibit

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeExhibit();
        }

    }
);



// ========================================
// START EXAM
// ========================================

createQuestionNavigator();

loadQuestion();

startTimer();