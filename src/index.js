const DURATION = 60; // 1 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

const clicked = document.querySelector("#start-btn");
clicked.addEventListener("click", startCountdown);

// ITERATION 2: Start Countdown
function startCountdown() {
  document.querySelector("#start-btn").style.opacity = 0;
  let currTime = 60;
  console.log("startCountdown called!");
  let timer = setInterval(function () {
    currTime--;
    document.querySelector("#time").textContent = currTime;
    if (currTime == 0) {
      clearInterval(timer);
    }
  }, 1000);
}
