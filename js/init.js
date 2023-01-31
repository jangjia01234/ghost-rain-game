// 여기에 공통 코드 작성

const heroElement = document.querySelector(".hero");

document.addEventListener("keydown", function (e) {
  const heroLeft = getComputedStyle(heroElement).left;
  const heroLeftNum = heroLeft.split("px")[0];

  if (e.keyCode === 37) {
    heroElement.style.left = heroLeftNum - 1 + "px";
    heroElement.className = "left";
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftNum + 1 + "px";
    heroElement.className = "right";
  }
});

document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});
