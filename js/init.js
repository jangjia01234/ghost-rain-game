// 여기에 공통 코드 작성

const timerElement = document.createElement("span");
const barElement = document.querySelector(".bar_upside_left");
timerElement.className = "timer";
timerElement.style.fontFamily = '"Silkscreen", cursive';

barElement.appendChild(timerElement);

let time = 30;

let timeCounter = setInterval(function () {
  timerElement.innerText = time--;

  if (time < 0) {
    clearInterval(timeCounter);
    document.querySelector(".timer").innerText = "☠️";
  }
}, 1000);
