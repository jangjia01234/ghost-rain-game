function createGhost() {
  const ghostElement = document.createElement("div");
  ghostElement.className = "ghost_element";
  const bgElementGhost = document.querySelector(".screen");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";
  ghostElement.style.left = randomNum() + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElementGhost.appendChild(ghostElement);

  //   setInterval(function () {
  //     // 1. ghost 요소 접근
  //     // 2. ghost 의 top 값 가져오기
  //     // 3. top 값 숫자 추출, 1 + px
  //     // 4. 다시 할당 (배경 넘어가면 멈춤)
  //     // top = 394 = 480(bg height) - 32(border height) - 54(ghost height)

  //     let ghostTopLocation = Number(ghostElement.style.top.split("px")[0]);
  //     return ghostTopLocation + 10;
  //   }, 1000);
}

createGhost();

function randomNum() {
  let randomLeft = Math.floor(Math.random() * 627); // 627 = 768(bg width) - 48*2(좌우 border width*2) - 45(ghost width)
  return randomLeft;
}
