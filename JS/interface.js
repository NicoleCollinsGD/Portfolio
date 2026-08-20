
/* =========================================
   NICO.EXE // SITE-WIDE INTERFACE
   ========================================= */


/* -----------------------------------------
   SYSTEM MESSAGE
   ----------------------------------------- */

const systemMessages = [

    "ARCHIVE ACCESS GRANTED.",

    "CREATIVE ACTIVITY DETECTED.",

    "WARNING // MINIMALISM NOT FOUND.",

    "VISUAL SYSTEMS ONLINE.",

    "DESIGN PROCESS INITIALIZED.",

    "SIX PROJECT FILES DETECTED.",

    "SYSTEM STABLE // CREATIVITY UNSTABLE.",

    "ORGANIZED CHAOS DETECTED.",

    "WELCOME TO NICO.EXE."

];


const pageMessages = {

    "hollythread.html":
        "ENVIRONMENTAL ANOMALY DETECTED.",

    "behind-the-crosshairs.html":
        "TARGET ACQUIRED // VISUAL EVIDENCE.",

    "boom-studios.html":
        "VISUAL SYSTEM REBUILD DETECTED.",

    "t-t-g.html":
        "NAVIGATION SYSTEM ONLINE.",

    "deck.html":
        "ARCHETYPE DATABASE LOADED.",

    "retro-reborn.html":
        "RETRO SIGNAL DETECTED.",

    "about.html":
        "USER PROFILE ACCESSED."

};


/* -----------------------------------------
   FIND CURRENT PAGE
   ----------------------------------------- */

const currentPage =
    window.location.pathname.split("/").pop();


let message =
    pageMessages[currentPage];


/* Homepage gets a random message */

if (!message || currentPage === "index.html") {

    message =
        systemMessages[
            Math.floor(
                Math.random() * systemMessages.length
            )
        ];

}


/* -----------------------------------------
   CREATE SYSTEM MESSAGE
   ----------------------------------------- */

const systemMessage =
    document.createElement("div");

systemMessage.className =
    "system-message";


systemMessage.innerHTML = `

    <span class="message-prefix">
        &gt; SYSTEM MESSAGE
    </span>

    <span class="system-message-text">
        ${message}
    </span>

`;


document.body.appendChild(systemMessage);


/* -----------------------------------------
   CREATE DRAGON
   ----------------------------------------- */

const dragon =
    document.createElement("div");

dragon.className =
    "dragon-companion";


dragon.innerHTML = `

    <div class="dragon-status">

        COMPANION.EXE

        <span class="dragon-status-light">
            ● ONLINE
        </span>

    </div>


    <div class="dragon-display">

        <div class="dragon-placeholder">
            🐉
        </div>

    </div>


    <div class="dragon-name">

        WATER DRAGON // ONLINE

    </div>

`;


document.body.appendChild(dragon);


/* -----------------------------------------
   DRAGON INTERACTION
   ----------------------------------------- */

const dragonStatus =
    dragon.querySelector(".dragon-status-light");


const dragonName =
    dragon.querySelector(".dragon-name");


dragon.addEventListener("mouseenter", function() {

    dragonStatus.textContent =
        "● HI";

    dragonName.textContent =
        "WATER DRAGON // HI";

});


dragon.addEventListener("mouseleave", function() {

    dragonStatus.textContent =
        "● ONLINE";

    dragonName.textContent =
        "WATER DRAGON // ONLINE";

});


dragon.addEventListener("click", function() {

    dragonStatus.textContent =
        "● RAAA";

    dragonName.textContent =
        "WATER DRAGON // RAAA";

});


/* -----------------------------------------
   DRAGON PERSONALITY
   ----------------------------------------- */


/* PAGE-SPECIFIC REACTIONS */

const dragonReactions = {

    "hollythread.html":
        "WATER DRAGON // ENRAGED",

    "behind-the-crosshairs.html":
        "WATER DRAGON // SCOPING",

    "boom-studios.html":
        "WATER DRAGON // READING",

    "t-t-g.html":
        "WATER DRAGON // NAVIGATING",

    "deck.html":
        "WATER DRAGON // PLAYING",

    "retro-reborn.html":
        "WATER DRAGON // DUELING",

    "about.html":
        "WATER DRAGON // EXPLORING"

};


/* CURRENT PAGE */

const dragonDefaultName =
    dragonReactions[currentPage] ||
    "WATER DRAGON // ONLINE";


/* INITIAL STATE */

dragonName.textContent =
    dragonDefaultName;


/* HOVER */

dragon.addEventListener("mouseenter", function() {

    dragonStatus.textContent =
        "● HI";

    dragonName.textContent =
        "WATER DRAGON // HI";

});


/* LEAVE */

dragon.addEventListener("mouseleave", function() {

    dragonStatus.textContent =
        "● ONLINE";

    dragonName.textContent =
        dragonDefaultName;

});


/* CLICK */

dragon.addEventListener("click", function() {

    dragonStatus.textContent =
        "● RAAA";

    dragonName.textContent =
        "WATER DRAGON // RAAA";

});


/* =========================================
   ARCHIVE DROPDOWN
   ========================================= */

const archiveToggle =
    document.getElementById("archive-toggle");

const archiveMenu =
    document.getElementById("archive-menu");


if (archiveToggle && archiveMenu) {

    archiveToggle.addEventListener("click", function() {

        archiveMenu.classList.toggle("open");

    });

}
/* =========================================
   ARCHIVE DROPDOWN
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {

    const archiveToggle =
        document.getElementById("archive-toggle");

    const archiveMenu =
        document.getElementById("archive-menu");


    if (!archiveToggle || !archiveMenu) {
        return;
    }


    archiveToggle.addEventListener("click", function() {

        archiveMenu.classList.toggle("open");

    });

});

/* =========================================
   ARCHIVE DROPDOWN
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const archiveButton =
        document.getElementById("archive-toggle");

    const archiveMenu =
        document.getElementById("archive-menu");


    if (!archiveButton || !archiveMenu) {
        return;
    }


    archiveButton.addEventListener("click", function () {

        archiveMenu.classList.toggle("open");

    });

});
const cursorTrail = document.createElement("div");

cursorTrail.className = "cursor-trail";

document.body.appendChild(cursorTrail);


let mouseX = 0;
let mouseY = 0;

let trailX = 0;
let trailY = 0;


document.addEventListener("mousemove", function(event) {

    mouseX = event.clientX;
    mouseY = event.clientY;

    document.body.classList.add("cursor-active");

});


function animateCursorTrail() {

    const previousX = trailX;
    const previousY = trailY;


    /* FOLLOW MOUSE */

    trailX += (mouseX - trailX) * 0.28;
    trailY += (mouseY - trailY) * 0.28;


    cursorTrail.style.left =
        trailX + "px";

    cursorTrail.style.top =
        trailY + "px";


    /* WATER DRAGON STREAM */

    if (document.body.dataset.cursor === "dragon") {

        const velocityX =
            trailX - previousX;

        const velocityY =
            trailY - previousY;

const speed =
    Math.sqrt(
        velocityX * velocityX +
        velocityY * velocityY
    );

    if (document.body.dataset.cursor === "dragon") {

    const streamLength =
        Math.min(
            65 + speed * 8,
            190
        );

    cursorTrail.style.width =
        streamLength + "px";

}

        const angle =
            Math.atan2(
                velocityY,
                velocityX
            ) * (180 / Math.PI);


        cursorTrail.style.transform =
            `translate(-50%, -50%) rotate(${angle}deg)`;

    }

    else {

        cursorTrail.style.transform =
            "translate(-50%, -50%)";

    }


    requestAnimationFrame(
        animateCursorTrail
    );

}




animateCursorTrail();


document.addEventListener("mouseleave", function() {

    document.body.classList.remove("cursor-active");

});

/* =========================================
   CUSTOM CURSORS
   ========================================= */

const dragonCursor = document.createElement("div");

dragonCursor.className =
    "custom-cursor dragon-cursor";

document.body.appendChild(dragonCursor);


const glitchCursor = document.createElement("div");

glitchCursor.className =
    "custom-cursor glitch-cursor";

document.body.appendChild(glitchCursor);


document.addEventListener("mousemove", function(event) {

    dragonCursor.style.left =
        event.clientX + "px";

    dragonCursor.style.top =
        event.clientY + "px";


    glitchCursor.style.left =
        event.clientX + "px";

    glitchCursor.style.top =
        event.clientY + "px";

});

/* =========================================
   CURSOR.EXE // MODE SELECTOR
   ========================================= */

const cursorOptions =
    document.querySelectorAll(".cursor-option");


cursorOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const selectedCursor =
            this.dataset.cursor;


        /* CHANGE CURSOR */

        document.body.dataset.cursor =
            selectedCursor;


        /* SAVE CURSOR */

        localStorage.setItem(
            "nicoCursor",
            selectedCursor
        );


        /* UPDATE ACTIVE BUTTON */

        cursorOptions.forEach(function(item) {

            item.classList.remove("active");

        });


        this.classList.add("active");


        /* UPDATE DISPLAY TEXT */

        const currentMode =
            document.getElementById(
                "cursor-current-mode"
            );


        if (currentMode) {

            const modeNames = {

                default: "STANDARD",

                dragon: "WATER DRAGON",

                crosshair: "TARGETING",

                glitch: "GLITCH"

            };


            currentMode.textContent =
                modeNames[selectedCursor];

        }

    });

});


/* =========================================
   LOAD SAVED CURSOR
   ========================================= */

const savedCursor =
    localStorage.getItem("nicoCursor");


if (savedCursor) {

    document.body.dataset.cursor =
        savedCursor;


    cursorOptions.forEach(function(option) {

        option.classList.remove("active");


        if (
            option.dataset.cursor ===
            savedCursor
        ) {

            option.classList.add("active");

        }

    });


    const currentMode =
        document.getElementById(
            "cursor-current-mode"
        );


    if (currentMode) {

        const modeNames = {

            default: "STANDARD",

            dragon: "WATER DRAGON",

            crosshair: "TARGETING",

            glitch: "GLITCH"

        };


        currentMode.textContent =
            modeNames[savedCursor];

    }

}

/* =========================================
   COMPANION.EXE // DRAGGABLE WINDOW
   ========================================= */

const companion =
    document.querySelector(".dragon-companion");

const companionHeader =
    document.querySelector(".dragon-status");


if (companion && companionHeader) {

    let dragging = false;

    let offsetX = 0;
    let offsetY = 0;


    /* LOAD SAVED POSITION */

    const savedLeft =
        localStorage.getItem("companionLeft");

    const savedTop =
        localStorage.getItem("companionTop");


    if (savedLeft && savedTop) {

        companion.style.right = "auto";
        companion.style.bottom = "auto";

        companion.style.left =
            savedLeft + "px";

        companion.style.top =
            savedTop + "px";

    }


    /* START DRAGGING */

    companionHeader.addEventListener(
        "mousedown",
        function(event) {

            dragging = true;

            const rect =
                companion.getBoundingClientRect();

            offsetX =
                event.clientX - rect.left;

            offsetY =
                event.clientY - rect.top;


            companion.style.right = "auto";
            companion.style.bottom = "auto";

            companion.style.left =
                rect.left + "px";

            companion.style.top =
                rect.top + "px";

        }
    );


    /* MOVE */

    document.addEventListener(
        "mousemove",
        function(event) {

            if (!dragging) return;


            const newLeft =
                event.clientX - offsetX;

            const newTop =
                event.clientY - offsetY;


            companion.style.left =
                newLeft + "px";

            companion.style.top =
                newTop + "px";

        }
    );


    /* STOP DRAGGING + SAVE */

    document.addEventListener(
        "mouseup",
        function() {

            if (!dragging) return;

            dragging = false;


            const rect =
                companion.getBoundingClientRect();


            localStorage.setItem(
                "companionLeft",
                rect.left
            );

            localStorage.setItem(
                "companionTop",
                rect.top
            );

        }
    );

}