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
      // 10px씩 이동하므로 마지막에 10px 띄우고 멈춤 -> 10 더해줌으로써 수정
      ghostElement.remove();
    }

    ghostElement.style.top = ghostTopNum + "px";
    // if문 먼저 작성 -> ghostTopNum이 완성된 후에 px 붙여야 정상적으로 실행됨

    // ghost 죽이는 액션 구현하기
    // 1. 유령과 용사가 겹치는 위치 찾기 (top, left)
    // 2. 접촉하면 죽은 유령의 이미지로 변경하기
    // 3. 3초 뒤에 유령 element 삭제하기 (setTimeout) -> 왜 필요하지?

    let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
    let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

    if (BG_HEIGHT - ghostTopNum < HERO_HEIGHT + GHOST_HEIGHT) {
      if (
        heroLeftNum < ghostLeftNum + GHOST_WIDTH &&
        ghostLeftNum < heroLeftNum
      ) {
        ghostElement.style.backgroundPosition = "-45px";
        setTimeout(function () {
          ghostElement.remove();
        }, 200);
      }
    }
  }, 100);
}

createGhost();

setInterval(createGhost, 2000);

function randomLeftNum() {
  let randomLeft = Math.floor(Math.random() * (BG_WIDTH - GHOST_WIDTH));
  return randomLeft;
}
