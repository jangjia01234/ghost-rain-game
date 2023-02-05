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

// to do list (0203 금요일 기준)
// 3. 상단바 디자인 수정 (목숨, 볼륨 버튼)
// 4. 시작 화면 구현 (press start) -> 화면 사라지면서 타이머 시작
// 5. 오디오 컨트롤 확인 (누르면 켜도록 js로 수정), 아이콘 변경,
// 노래도 바꿀까..? 일단 소리도 너무 크다
// 6. (선택) 유령 죽일 때마다 상단바 숫자 증가
// 7. (선택) 유령에 닿을 때마다 하트 하나씩 감소
