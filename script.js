"use strict";

// Initialize timer variables
var minutes = 0;
var seconds = 0;
var timeoutId = null;

// Get DOM elements
var startBtn = document.getElementById("startButton");
var stopBtn = document.getElementById("stopButton");
var resetBtn = document.getElementById("resetButton");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");
var audio = new Audio('sound.mp3');

// Function to update the timer display
function updateTimerDisplay() {
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    getMinutes.value = formattedMinutes;
    getSeconds.value = formattedSeconds;
}

// Countdown function to update the timer
function countdown() {
    // Check if the timer has reached zero minutes and zero seconds
    if (minutes === 0 && seconds === 0) {
        const mediaDiv = document.getElementById("media");
        mediaDiv.innerHTML = '<img src="images/start.png" alt="Start">';
        audio.pause();
        return;
    }

    // Decrement seconds and minutes as needed
    if (seconds === 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    // Update the timer display
    updateTimerDisplay();

    // Call the countdown function again after 1 second
    timeoutId = setTimeout(countdown, 1000);
}

// Function to start the timer
function startTimer() {
    minutes = parseInt(getMinutes.value) || 0;
    seconds = parseInt(getSeconds.value) || 0;
    if (minutes === 0 && seconds === 0) {
        alert("Timer Not Set");
        return;
    }
    const mediaDiv = document.getElementById("media");
    mediaDiv.innerHTML = '<img src="images/running.gif" alt="Running">';
    audio.play();
    countdown(); // Start the countdown
}

// Function to stop the timer
function stopTimer() {
    const mediaDiv = document.getElementById("media");
    mediaDiv.innerHTML = '<img src="images/reset.png" alt="Start">';
    audio.pause();
    clearTimeout(timeoutId); // Stop the timer
}

// Function to reset the timer
function resetTimer() {
    const mediaDiv = document.getElementById("media");
    mediaDiv.innerHTML = '<img src="images/reset.png" alt="Reset">';
    stopTimer(); // Stop the timer
    audio.pause();
    minutes = 0;
    seconds = 0;
    getMinutes.value = "00";
    getSeconds.value = "00";
}

// Event listeners for buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
