function createGhost() {
  const ghostElement = document.createElement("div");
  ghostElement.className = "ghost_element";
  const bgElementGhost = document.querySelector(".screen");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";
  ghostElement.style.left = randomLeftNum() + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElementGhost.appendChild(ghostElement);

  setInterval(function () {
    // 1. ghost 요소 접근 -> createGhost() 함수 안에 setInterval 넣음으로써 해결
    // 2. ghost 의 top 가져오기 -> 숫자 추출 -> + 1
    // 3. 증가한 값 top 에 재할당
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;

    // 배경보다 넘어가면 움직이지 않게 멈추기
    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT + 10) {
      return; // 10px씩 이동하므로 마지막에 10px 띄우고 멈춤 -> 10 더해줌으로써 수정
    }

    ghostElement.style.top = ghostTopNum + "px";
    // if문 먼저 작성 -> ghostTopNum이 완성된 후에 px 붙여야 정상적으로 실행됨
  }, 100);
}

createGhost();

function createAnotherGhost() {
  const newGhostElement = document.createElement("div");
  newGhostElement.className = "ghost_element";
  const newBgElementGhost = document.querySelector(".screen");

  newGhostElement.style.position = "absolute";
  newGhostElement.style.top = "-40px";
  newGhostElement.style.left = randomLeftNum() + "px";

  newGhostElement.style.width = GHOST_WIDTH + "px";
  newGhostElement.style.height = GHOST_HEIGHT + "px";
  newGhostElement.style.background = 'url("./images/ghost.png") no-repeat';

  newBgElementGhost.appendChild(newGhostElement);

  setInterval(function () {
    let newGhostTopNum = Number(newGhostElement.style.top.split("px")[0]) + 10;
    if (newGhostTopNum > BG_HEIGHT - GHOST_HEIGHT + 10) {
      return;
    }
    newGhostElement.style.top = newGhostTopNum + "px";
  }, 100);
}

createAnotherGhost();

function createLastGhost() {
  const lastGhostElement = document.createElement("div");
  lastGhostElement.className = "ghost_element";
  const lastBgElementGhost = document.querySelector(".screen");

  lastGhostElement.style.position = "absolute";
  lastGhostElement.style.top = "-80px";
  lastGhostElement.style.left = randomLeftNum() + "px";

  lastGhostElement.style.width = GHOST_WIDTH + "px";
  lastGhostElement.style.height = GHOST_HEIGHT + "px";
  lastGhostElement.style.background = 'url("./images/ghost.png") no-repeat';

  lastBgElementGhost.appendChild(lastGhostElement);

  setInterval(function () {
    let lastGhostTopNum =
      Number(lastGhostElement.style.top.split("px")[0]) + 10;
    if (lastGhostTopNum > BG_HEIGHT - GHOST_HEIGHT + 10) {
      return;
    }
    lastGhostElement.style.top = lastGhostTopNum + "px";
  }, 100);
}

createLastGhost();

function randomLeftNum() {
  let randomLeft = Math.floor(Math.random() * (BG_WIDTH - GHOST_WIDTH));
  return randomLeft;
}

function randomTopNum() {
  let randomTop = Math.floor(Math.random() * (BG_HEIGHT - GHOST_HEIGHT));
  return randomTop;
}
