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
