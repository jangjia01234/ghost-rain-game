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

  setInterval(function () {
    // 1. ghost 요소 접근 -> createGhost() 함수 안에 setInterval 넣음으로써 해결
    // 2. ghost 의 top 가져오기 -> 숫자 추출 -> + 1
    // 3. 증가한 값 top 에 재할당
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;
    ghostElement.style.top = ghostTopNum + "px";
  }, 100);
}

createGhost();

function randomNum() {
  let randomLeft = Math.floor(Math.random() * 627); // 627 = 768(bg width) - 48*2(좌우 border width*2) - 45(ghost width)
  return randomLeft;
}
