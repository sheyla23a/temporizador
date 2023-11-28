let timer;
let isTimerRunning = false;

function startTimer() {
  if (!isTimerRunning) {
    const inputTime = document.getElementById("inputTime").value;

    if (inputTime > 0) {
      let seconds = inputTime;

      displayTime(seconds);

      function countDown() {
        if (seconds > 0) {
          seconds--;
          displayTime(seconds);

          timer = setTimeout(countDown, 1000);
        } else {
          isTimerRunning = false;
        }
      }

      countDown();
      isTimerRunning = true;
    }
  }
}

function pauseTimer() {
  clearTimeout(timer);
  isTimerRunning = false;
}

function resetTimer() {
  clearTimeout(timer);
  isTimerRunning = false;

  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById("inputTime").value = "";
}

function displayTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(remainingSeconds)}`;
  document.getElementById("timer").innerText = formattedTime;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time.toString();
  }
}
