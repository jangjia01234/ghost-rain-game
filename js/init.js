// 여기에 공통 코드 작성

const timerElement = document.createElement("span");
const barElement = document.querySelector(".bar_upside_left");
timerElement.className = "timer";

// timerElement.innerText = 4;

barElement.appendChild(timerElement);

let time = 30;

let timeCounter = setInterval(function () {
  timerElement.innerText = time--;

  if (time < 0) {
    clearInterval(timeCounter);
    document.querySelector(".timer").innerHTML = "시간초과";
  }
}, 1000);
