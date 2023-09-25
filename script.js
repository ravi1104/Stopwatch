"use strict"
var minutes = 0;
var seconds = 0;
var intervalId = null;
var startBtn = document.getElementById("startButton");
var stopBtn = document.getElementById("stopButton");
var resetBtn = document.getElementById("resetButton");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");

function updateTimerDisplay() {
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    getMinutes.value = formattedMinutes;
    getSeconds.value = formattedSeconds;
  }

function timer() {

  function abc() {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      window.alert("done");
    } else {
      if (seconds === 0) {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        }
      }
      seconds--;
    }

    updateTimerDisplay();
  }
  intervalId = setInterval(abc, 1000);
}

function startTimer() {
  minutes = parseInt(getMinutes.value)||0;
  seconds = parseInt(getSeconds.value)||0;
  timer();
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  getMinutes.value = "00";
  getSeconds.value = "00";
}



startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
