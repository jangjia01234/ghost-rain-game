// 여기에 공통 코드 작성

// timer
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
    timerElement.style.color = "transparent";
    timerElement.style.background = 'url("./images/giphy.gif") no-repeat';
    timerElement.style.width = "35px";
    timerElement.style.height = "35px";
    timerElement.style.backgroundSize = "cover";
  }
}, 1000);

// to do list (0203 금요일 기준)
// 4. 시작 화면 구현 (press start) -> 화면 사라지면서 타이머 시작
// 6. (선택) 유령 죽일 때마다 상단바 숫자 증가
// 7. (선택) 유령에 닿을 때마다 하트 하나씩 감소
