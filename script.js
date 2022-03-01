let timeout;
let timerActive = false;

function myTimeout() {
  timerActive = true;
  timeout = setTimeout(alertFunc, 10000);
}

function alertFunc() {
  alert(`Time is up! Your score is: ${counterNum}`);
  timerActive = false;
  counterNum = 0;
  counter.textContent = counterNum;
}

let counterNum = 0;

function myCounter() {
  counterNum += 1;
  console.log(counterNum);
  counter.textContent = counterNum;

  if (!timerActive) {
    myTimeout();
  }
}

let counter = document.getElementById("counter");
let button = document.getElementById("button");

button.addEventListener("click", myCounter);

