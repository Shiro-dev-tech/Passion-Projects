// ======================================
// CCST PERSONA-STYLE AUDIO SYSTEM
// ======================================

// --------------------------------------
// AUDIO FILES
// --------------------------------------

const bgMusic =
    new Audio("audio/exam-music.mp3");

const menuSound =
    new Audio("audio/menu.mp3");

const selectSound =
    new Audio("audio/select.mp3");

const confirmSound =
    new Audio("audio/confirm.mp3");


// --------------------------------------
// SETTINGS
// --------------------------------------

bgMusic.loop = true;

bgMusic.volume = 0.25;

menuSound.volume = 0.5;

selectSound.volume = 0.5;

confirmSound.volume = 0.65;


let musicEnabled =
    localStorage.getItem("musicEnabled") !== "false";

let soundEnabled =
    localStorage.getItem("soundEnabled") !== "false";


// ======================================
// PLAY SOUND
// ======================================

function playSound(sound) {

    if (!soundEnabled) {
        return;
    }

    sound.currentTime = 0;

    sound.play().catch(function () {
        // Ignore browser playback errors
    });
}


// ======================================
// BACKGROUND MUSIC
// ======================================

function playBackgroundMusic() {

    if (!musicEnabled) {
        return;
    }

    bgMusic.play().catch(function () {
        // Browser may require interaction first
    });
}


function stopBackgroundMusic() {

    bgMusic.pause();

    bgMusic.currentTime = 0;
}


// ======================================
// MUSIC TOGGLE
// ======================================

function toggleMusic() {

    musicEnabled =
        !musicEnabled;

    localStorage.setItem(
        "musicEnabled",
        musicEnabled
    );


    if (musicEnabled) {

        playBackgroundMusic();

    } else {

        bgMusic.pause();
    }


    updateAudioButtons();
}


// ======================================
// SFX TOGGLE
// ======================================

function toggleSounds() {

    soundEnabled =
        !soundEnabled;

    localStorage.setItem(
        "soundEnabled",
        soundEnabled
    );


    updateAudioButtons();
}


// ======================================
// UPDATE BUTTON TEXT
// ======================================

function updateAudioButtons() {

    const musicButton =
        document.getElementById(
            "music-toggle"
        );

    const soundButton =
        document.getElementById(
            "sound-toggle"
        );


    if (musicButton) {

        musicButton.textContent =
            musicEnabled
                ? "♫ Music ON"
                : "♫ Music OFF";
    }


    if (soundButton) {

        soundButton.textContent =
            soundEnabled
                ? "♪ SFX ON"
                : "♪ SFX OFF";
    }
}


// ======================================
// BUTTON CLICK SOUND
// ======================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        // Don't play normal menu sound
        // for Submit Exam.
        if (
            button.classList.contains(
                "submit-button"
            )
        ) {

            return;
        }


        // Don't play menu sound
        // when toggling SFX itself.
        if (
            button.id ===
            "sound-toggle"
        ) {

            return;
        }


        playSound(menuSound);

    }
);


// ======================================
// ANSWER SELECTION SOUND
// ======================================

document.addEventListener(
    "change",
    function (event) {

        if (
            event.target.matches(
                'input[type="radio"], input[type="checkbox"], select'
            )
        ) {

            playSound(selectSound);
        }

    }
);


// ======================================
// START MUSIC AFTER FIRST INTERACTION
// ======================================

function startAudioAfterInteraction() {

    playBackgroundMusic();

    document.removeEventListener(
        "click",
        startAudioAfterInteraction
    );
}


document.addEventListener(
    "click",
    startAudioAfterInteraction
);


// ======================================
// INITIALIZE
// ======================================

updateAudioButtons();