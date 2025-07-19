let timerInterval;
let startTime;
let gameOver = false;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (gameOver) return;
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").innerText = `Time: ${elapsedSeconds} seconds`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function submitGuess() {
    if (gameOver) return;

    const guess = document.getElementById("guessInput").value.trim();
    const responseBox = document.getElementById("response");

    if (!/^\d+$/.test(guess)) {
        responseBox.innerText = "Invalid input! Please enter a whole number.";
        responseBox.className = 'invalid';
        return;
    }

    const guessInt = parseInt(guess);
    if (guessInt < 1 || guessInt > 100) {
        responseBox.innerText = "Guess must be between 1 and 100.";
        responseBox.className = 'invalid';
        return;
    }

    const formData = new FormData();
    formData.append('guess', guessInt);

    fetch('/guess', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseBox.innerText = data.message;
        responseBox.className = data.status;

        if (data.status === 'correct') {
            stopTimer();
            gameOver = true;
            document.getElementById("submitBtn").disabled = true;
            document.getElementById("newGameBtn").style.display = "inline-block";
        }
    });
}

function startNewGame() {
    fetch('/reset', { method: 'POST' })
        .then(() => {
            document.getElementById("guessInput").value = '';
            document.getElementById("response").innerText = "Start guessing...";
            document.getElementById("response").className = 'neutral';
            document.getElementById("newGameBtn").style.display = "none";
            document.getElementById("submitBtn").disabled = false;
            gameOver = false;
            startTimer();
        });
}

window.onload = () => {
    startTimer();
};
