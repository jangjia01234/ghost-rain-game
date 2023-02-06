const heroElement = document.createElement("div");
const bgElement = document.querySelector(".screen");

heroElement.style.position = "absolute";
heroElement.style.bottom = "0";
heroElement.style.left = "45%"; // 35px 더 가 있으니.. 50%는 조금 오른쪽인듯

heroElement.style.width = HERO_WIDTH + "px";
heroElement.style.height = HERO_HEIGHT + "px";
heroElement.style.background = 'url("./images/hero.png") no-repeat';

bgElement.appendChild(heroElement);

document.addEventListener("keydown", function (e) {
  let key = e.key || e.keyCode;

  let heroLeft = getComputedStyle(heroElement).left;
  // 아래 Number() 중요! split 까지만 하면 문자열이라 숫자 처리 해야함
  let heroLeftNum = Number(heroLeft.split("px")[0]);

  if (key === "ArrowLeft" || key === 37) {
    heroElement.style.backgroundPosition = "-70px";
    heroElement.style.left = heroLeftNum - 10 + "px";
  } else if (key === "ArrowRight" || key === 39) {
    heroElement.style.backgroundPosition = "-105px";
    heroElement.style.left = heroLeftNum + 10 + "px";
  } else if (heroLeft < 0 && (key === "ArrowLeft" || key === 37)) {
    heroElement.style.left = 0;
  } else if (
    heroLeft > BG_WIDTH - HERO_WIDTH &&
    (key === "ArrowRight" || key === 39)
  ) {
    heroElement.style.left = 0;
  }
});

document.addEventListener("keyup", function () {
  heroElement.style.backgroundPosition = "0";
});

//// 상하좌우 모두 움직이는 버전 (캐릭터 모습 변경 + 위치 이동) -> 에러 조금 있음

// document.addEventListener("keydown", function (e) {
//     let key = e.key || e.keyCode;

//     let heroLeft = getComputedStyle(heroElement).left;
//     let heroLeftNum = heroLeft.split("px")[0];

//     let heroTop = getComputedStyle(heroElement).top;
//     let heroTopNum = heroTop.split("px")[0];

//     if (key === "ArrowLeft" || key === 37) {
//       heroElement.style.backgroundPosition = "-70px";
//       heroElement.style.left = heroLeftNum - 4 + "px";
//     } else if (key === "ArrowRight" || key === 39) {
//       heroElement.style.backgroundPosition = "-105px";
//       heroElement.style.left = heroLeftNum + 4 + "px";
//     } else if (key === "ArrowUp" || key === 38) {
//       heroElement.style.backgroundPosition = "0";
//       heroElement.style.top = heroTopNum - 4 + "px";
//     } else if (key === "ArrowDown" || key === 30) {
//       heroElement.style.backgroundPosition = "-35px";
//       heroElement.style.top = heroTopNum + 4 + "px";
//     } else {
//       heroElement.style.backgroundPosition = "0";
//     }
// });
