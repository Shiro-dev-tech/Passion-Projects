// ========================================
// CCST NETWORKING RESULTS
// results.js
// ========================================


// ========================================
// LOAD SAVED RESULTS
// ========================================

const resultData =
    JSON.parse(
        localStorage.getItem("ccstResult")
    );

const examQuestions =
    JSON.parse(
        localStorage.getItem("ccstQuestions")
    );


// ========================================
// CHECK SAVED DATA
// ========================================

if (!resultData || !examQuestions) {

    alert("No exam result was found.");

    window.location.href =
        "index.html";
}


// ========================================
// DISPLAY SCORE
// ========================================

document.getElementById(
    "scaled-score"
).textContent =
    resultData.scaledScore;


// ========================================
// CALCULATE RESULT BREAKDOWN
// ========================================

let incorrectCount = 0;
let unansweredCount = 0;
let unscoredCount = 0;


// Check every question individually

examQuestions.forEach(  
    function (question, index) {

        const userAnswer =
            resultData.answers[index];


        // ========================================
        // UNSCORED QUESTION
        // ========================================

        if (
            question.sourceIssue ||
            question.unverified ||
            (
                question.type !== "matching" &&
                (
                    question.answer === null ||
                    question.answer === undefined
                )
            )
        ) {

            unscoredCount++;

            return;
        }


        // ========================================
        // CHECK IF UNANSWERED
        // ========================================

        let answered = false;


        if (
            question.type === "multiple"
        ) {

            answered =
                Array.isArray(userAnswer) &&
                userAnswer.length ===
                question.required;

        } else if (
            question.type === "matching"
        ) {

            answered =
                Array.isArray(userAnswer) &&
                userAnswer.length ===
                question.items.length &&
                userAnswer.every(
                    function (value) {

                        return (
                            value !== "" &&
                            value !== null &&
                            value !== undefined
                        );
                    }
                );

        } else {

            answered =
                userAnswer !== null &&
                userAnswer !== undefined;
        }


        if (!answered) {

            unansweredCount++;

            return;
        }


        // ========================================
        // CHECK IF ANSWERED INCORRECTLY
        // ========================================

        let correct = false;


        if (
            question.type === "multiple"
        ) {

            correct =
                arraysMatch(
                    userAnswer,
                    question.answer
                );

        } else if (
            question.type === "matching"
        ) {

            correct =
                matchingAnswersMatch(
                    question,
                    userAnswer
                );

        } else {

            correct =
                userAnswer ===
                question.answer;
        }


        if (!correct) {

            incorrectCount++;
        }

    }
);


// ========================================
// DISPLAY RESULT BREAKDOWN
// ========================================

document.getElementById(
    "correct-count"
).textContent =
    resultData.correct;


document.getElementById(
    "incorrect-count"
).textContent =
    incorrectCount;


document.getElementById(
    "unanswered-count"
).textContent =
    unansweredCount;


document.getElementById(
    "unscored-count"
).textContent =
    unscoredCount;


document.getElementById(
    "percentage"
).textContent =
    resultData.percentage + "%";


// ========================================
// PASS / FAIL
// ========================================

const resultStatus =
    document.getElementById(
        "result-status"
    );


if (resultData.scaledScore >= 700) {

    resultStatus.textContent =
        "PASS";

    resultStatus.className =
        "result-status pass";

} else {

    resultStatus.textContent =
        "NOT PASSED";

    resultStatus.className =
        "result-status fail";
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
                value === b[index]
            );
        }
    );
}


// ========================================
// FORMAT SINGLE ANSWER
// ========================================

function formatSingleAnswer(
    question,
    answer
) {

    if (
        answer === null ||
        answer === undefined
    ) {

        return "Unanswered";
    }


    if (
        !question.choices ||
        question.choices[answer] === undefined
    ) {

        return "Unanswered";
    }


    const letter =
        String.fromCharCode(
            65 + answer
        );


    return (
        letter +
        ". " +
        question.choices[answer]
    );
}


// ========================================
// FORMAT MULTIPLE ANSWERS
// ========================================

function formatMultipleAnswers(
    question,
    answers
) {

    if (
        !Array.isArray(answers) ||
        answers.length === 0
    ) {

        return "Unanswered";
    }


    return answers
        .map(
            function (answer) {

                const letter =
                    String.fromCharCode(
                        65 + answer
                    );


                return (
                    letter +
                    ". " +
                    question.choices[answer]
                );
            }
        )
        .join(" | ");
}


// ========================================
// FORMAT MATCHING USER ANSWERS
// ========================================

function formatMatchingUserAnswers(
    question,
    answers
) {

    if (
        !Array.isArray(answers)
    ) {

        return "Unanswered";
    }


    const lines = [];


    question.items.forEach(
        function (item, index) {

            const selected =
                answers[index];


            lines.push(
                item.label +
                " → " +
                (
                    selected
                        ? selected
                        : "Unanswered"
                )
            );
        }
    );


    return lines.join(" | ");
}


// ========================================
// FORMAT MATCHING CORRECT ANSWERS
// ========================================

function formatMatchingCorrectAnswers(
    question
) {

    const lines = [];


    question.items.forEach(
        function (item) {

            lines.push(
                item.label +
                " → " +
                (
                    item.answer !== null &&
                    item.answer !== undefined
                        ? item.answer
                        : "Not provided by reviewer"
                )
            );
        }
    );


    return lines.join(" | ");
}


// ========================================
// CHECK MATCHING ANSWER
// ========================================

function matchingAnswersMatch(
    question,
    answers
) {

    if (
        !Array.isArray(answers)
    ) {

        return false;
    }


    if (
        answers.length !==
        question.items.length
    ) {

        return false;
    }


    return question.items.every(
        function (item, index) {

            return (
                answers[index] ===
                item.answer
            );
        }
    );
}


// ========================================
// DETERMINE UNSCORED QUESTION
// ========================================

function isUnscoredQuestion(
    question
) {

    if (
        question.sourceIssue ||
        question.unverified
    ) {

        return true;
    }


    if (
        question.type !== "matching" &&
        (
            question.answer === null ||
            question.answer === undefined
        )
    ) {

        return true;
    }


    return false;
}


// ========================================
// REVIEW ANSWERS
// ========================================

let reviewVisible = false;


function toggleReview() {

    const container =
        document.getElementById(
            "review-container"
        );


    // Hide review
    if (reviewVisible) {

        container.innerHTML = "";

        reviewVisible = false;

        return;
    }


    reviewVisible = true;

    container.innerHTML = "";


    // ========================================
    // LOOP THROUGH EVERY SAVED QUESTION
    // ========================================

    examQuestions.forEach(
        function (question, index) {

            const userAnswer =
                resultData.answers[index];


            // ========================================
            // CARD
            // ========================================

            const reviewCard =
                document.createElement(
                    "div"
                );

            reviewCard.className =
                "review-card";


            // ========================================
            // QUESTION NUMBER
            // ========================================

            const title =
                document.createElement(
                    "h3"
                );

            title.textContent =
                "Question " +
                (index + 1);


            // ========================================
            // CATEGORY / SOURCE
            // ========================================

            const category =
                document.createElement(
                    "p"
                );

            category.className =
                "review-category";


            let categoryText =
                question.category ||
                "Uncategorized";


            if (question.sourcePage) {

                categoryText +=
                    " • Reviewer Page " +
                    question.sourcePage;
            }


            if (question.inferred) {

                categoryText +=
                    " • Inferred Answer";
            }


            category.textContent =
                categoryText;


            // ========================================
            // QUESTION TEXT
            // ========================================

            const questionText =
                document.createElement(
                    "p"
                );

            questionText.className =
                "review-question";

            questionText.textContent =
                question.question;


            // ========================================
            // YOUR ANSWER
            // ========================================

            const yourAnswer =
                document.createElement(
                    "p"
                );


            let userAnswerText;


            if (
                question.type ===
                "multiple"
            ) {

                userAnswerText =
                    formatMultipleAnswers(
                        question,
                        userAnswer
                    );

            } else if (
                question.type ===
                "matching"
            ) {

                userAnswerText =
                    formatMatchingUserAnswers(
                        question,
                        userAnswer
                    );

            } else {

                userAnswerText =
                    formatSingleAnswer(
                        question,
                        userAnswer
                    );
            }


            yourAnswer.textContent =
                "Your answer: " +
                userAnswerText;


            // ========================================
            // ADD BASIC CARD ELEMENTS
            // ========================================

            reviewCard.appendChild(
                title
            );

            reviewCard.appendChild(
                category
            );

            reviewCard.appendChild(
                questionText
            );

            reviewCard.appendChild(
                yourAnswer
            );


            // ========================================
            // UNSCORED / REVIEWER ISSUE
            // ========================================

            if (
                isUnscoredQuestion(
                    question
                )
            ) {

                const warning =
                    document.createElement(
                        "div"
                    );

                warning.className =
                    "unscored-warning";


                if (
                    question.sourceIssue
                ) {

                    warning.innerHTML =
                        "<strong>⚠ REVIEWER ISSUE</strong>" +
                        "<p>This question was not included in your score because the source reviewer does not provide enough trustworthy information for a definite scored answer.</p>";

                } else if (
                    question.unverified
                ) {

                    warning.innerHTML =
                        "<strong>⚠ UNVERIFIED ANSWER</strong>" +
                        "<p>This question was not included in your score because its answer has not been fully verified.</p>";

                } else {

                    warning.innerHTML =
                        "<strong>UNSCORED QUESTION</strong>" +
                        "<p>This question was not included in your score.</p>";
                }


                reviewCard.appendChild(
                    warning
                );


                container.appendChild(
                    reviewCard
                );


                return;
            }


            // ========================================
            // CHECK CORRECTNESS
            // ========================================

            let isCorrect = false;


            if (
                question.type ===
                "multiple"
            ) {

                isCorrect =
                    arraysMatch(
                        userAnswer,
                        question.answer
                    );

            } else if (
                question.type ===
                "matching"
            ) {

                isCorrect =
                    matchingAnswersMatch(
                        question,
                        userAnswer
                    );

            } else {

                isCorrect =
                    userAnswer ===
                    question.answer;
            }


            // ========================================
            // CORRECT ANSWER TEXT
            // ========================================

            let correctAnswerText;


            if (
                question.type ===
                "multiple"
            ) {

                correctAnswerText =
                    formatMultipleAnswers(
                        question,
                        question.answer
                    );

            } else if (
                question.type ===
                "matching"
            ) {

                correctAnswerText =
                    formatMatchingCorrectAnswers(
                        question
                    );

            } else {

                correctAnswerText =
                    formatSingleAnswer(
                        question,
                        question.answer
                    );
            }


            const correct =
                document.createElement(
                    "p"
                );

            correct.textContent =
                "Correct answer: " +
                correctAnswerText;


            // ========================================
            // STATUS
            // ========================================

            const status =
                document.createElement(
                    "strong"
                );


            if (isCorrect) {

                status.textContent =
                    "Correct";

                status.className =
                    "correct-text";

            } else {

                status.textContent =
                    "Incorrect";

                status.className =
                    "incorrect-text";
            }


            reviewCard.appendChild(
                correct
            );

            reviewCard.appendChild(
                status
            );


            container.appendChild(
                reviewCard
            );
        }
    );
}


// ========================================
// RETAKE EXAM
// ========================================

function retakeExam() {

    localStorage.removeItem(
        "ccstResult"
    );

    localStorage.removeItem(
        "ccstQuestions"
    );


    window.location.href =
        "exam.html";
}