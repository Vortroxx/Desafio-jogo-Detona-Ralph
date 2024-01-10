const state = {

    view: {
        square: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-Left"),
        score: document.querySelector("#score"),
    },
    valeus: {
        gameVelocity: 1000,
        hitPisition: 0,
        result: 0,
        curretTime: 60,
    },
    actions: {

        timeid: setInterval(randomSquare, 1000),
        countDownTimeId: setInterval(countDown, 1000),
    },
};

function playSound() {
    const audio = new Audio("../src/audios/hit.m4a");  
    audio.volume = 0.2;
    audio.play();
}

function countDown() {
    state.valeus.curretTime--;
    state.view.timeLeft.textContent = state.valeus.curretTime;

    if (state.valeus.curretTime <= 0) {
        alert("Game Over! O seu resultado foi: " + state.valeus.result);
    }
}


function randomSquare() {
    state.view.square.forEach((square) => {
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.square[randomNumber];
    randomSquare.classList.add("enemy");
    state.valeus.hitPisition = randomSquare.id;
}

// function moveEnemy() {
//     state.valeus.timeid = setInterval(randomSquare, state.valeus.gameVelocity);
// }

function addListenerHitBox() {
    state.view.square.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.valeus.hitPisition) {
                state.valeus.result++;
                state.view.score.textContent = state.valeus.result;
                state.valeus.hitPisition = null;
               playSound();
            }
        });
    });
}

function init() {
    // moveEnemy();
    addListenerHitBox();
    
}

init();