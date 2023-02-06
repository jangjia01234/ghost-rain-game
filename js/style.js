// start screen

const startScreen = document.createElement("div");
startScreen.className = "start-screen";
const bgElementStart = document.querySelector(".screen");

bgElementStart.style.display = "flex";
bgElementStart.style.justifyContent = "center";

startScreen.style.position = "absolute";
startScreen.style.width = "100%";
startScreen.style.height = "100%";
startScreen.style.background =
  'url("https://media2.giphy.com/media/NKEt9elQ5cR68/giphy.gif?cid=ecf05e47rh1dbp4ydpdpnyi25f85xrqaty9vw7xns8vawi2a&rid=giphy.gif&ct=g") no-repeat';
startScreen.style.backgroundSize = "cover";
startScreen.style.filter = "brightness(60%)";
startScreen.style.zIndex = "1";

bgElementStart.appendChild(startScreen);

const startScreenText = document.createElement("h1");
startScreenText.className = "start-screen-text";
startScreenText.innerHTML = "GHOST RAIN";
startScreenText.style.marginTop = "15%";
startScreenText.style.color = "#eee";
startScreenText.style.zIndex = "2";

bgElementStart.appendChild(startScreenText);

const startScreenBtn = document.createElement("button");
startScreenBtn.className = "start-screen-btn";

startScreenBtn.innerHTML = "PRESS START";
startScreenBtn.style.position = "absolute";
startScreenBtn.style.width = "30%";
startScreenBtn.style.height = "15%";

startScreenBtn.style.marginTop = "35%";
startScreenBtn.style.fontFamily = "Silkscreen, cursive";
startScreenBtn.style.fontSize = "20px";
startScreenBtn.style.textAlign = "center";
startScreenBtn.style.backgroundColor = "#C600CA";
startScreenBtn.style.color = "#F2CDF6";
startScreenBtn.style.borderRadius = "15px";
startScreenBtn.style.cursor = "pointer";
startScreenBtn.style.zIndex = "2";

bgElementStart.appendChild(startScreenBtn);

function startScreenAction() {
  startScreen.style.display = "none";
  startScreenText.style.display = "none";
  startScreenBtn.style.display = "none";
}

startScreenBtn.addEventListener("click", startScreenAction);

// timer

const timerElement = document.createElement("span");
const barElement = document.querySelector(".bar_upside_left");

timerElement.className = "timer";
timerElement.style.fontFamily = "Silkscreen, cursive";

barElement.appendChild(timerElement);

function timerAction() {
  let time = 15;

  let timeCounter = setInterval(function () {
    timerElement.innerText = time--;

    if (time < 0) {
      clearInterval(timeCounter);
      timerElement.innerHTML = "TIMEOUT";
      timerElement.style.width = "35px";
      timerElement.style.height = "35px";
      timerElement.style.backgroundSize = "cover";

      bgElementStart.style.backgroundColor = "black";
      startScreen.style.display = "block";
      startScreen.style.background =
        'url("https://media1.giphy.com/media/Vd8V1PpBe1Jr3SNP1d/giphy.gif?cid=ecf05e47lsruk49n2nz0csfje8apmwf5d3iujcpxdt48pd4j&rid=giphy.gif&ct=g") no-repeat';
      startScreen.style.backgroundSize = "cover";
      startScreen.style.backgroundPosition = "-40px";
    }
  }, 1000);
}

startScreenBtn.addEventListener("click", timerAction);

// upside bar style

const barUpsideWrapElement = document.querySelector(".bar_upside_wrap");
barUpsideWrapElement.style.display = "flex";
barUpsideWrapElement.style.justifyContent = "space-between";
barUpsideWrapElement.style.alignItems = "center";
barUpsideWrapElement.style.color = "white";

const barUpsideElement = document.querySelector(".bar_upside");
barUpsideElement.style.position = "fixed";
barUpsideElement.style.top = "20px";
barUpsideElement.style.fontSize = "25px";
barUpsideElement.style.width = "100%";
barUpsideElement.style.padding = "0 40px 0 40px";

const barUpsideLeftElement = document.querySelector(".bar_upside_left");
barUpsideLeftElement.style.display = "flex";
barUpsideLeftElement.style.alignItems = "center";

const timerImgElement = document.querySelector(".timer-img");
timerImgElement.style.width = "30px";

const barUpsideTitleElement = document.querySelector(".bar_upside_title");
barUpsideTitleElement.style.fontSize = "50px";

const barUpsideRightElement = document.querySelector(".bar_upside_right");
barUpsideRightElement.style.display = "flex";
barUpsideRightElement.style.alignItems = "center";
barUpsideRightElement.style.cursor = "pointer";

// switch style

const htmlElement = document.querySelector("html");
htmlElement.style.boxSizing = "border-box";
htmlElement.style.fontFamily = "Silkscreen, cursive";

const bodyElement = document.querySelector("body");
bodyElement.style.display = "flex";
bodyElement.style.height = "100vh";
bodyElement.style.fontSize = "2em";
bodyElement.style.background =
  'url("https://media2.giphy.com/media/NKEt9elQ5cR68/giphy.gif?cid=ecf05e47rh1dbp4ydpdpnyi25f85xrqaty9vw7xns8vawi2a&rid=giphy.gif&ct=g") no-repeat';
bodyElement.style.backgroundSize = "cover";
bodyElement.style.backdropFilter = "blur(20px) brightness(40%)";
bodyElement.style.zIndex = "0";

const switchElement = document.querySelector(".switch");
switchElement.style.position = "relative";
switchElement.style.zIndex = "1";
switchElement.style.margin = "auto";

const bodyClassElement = document.querySelector(".body");
bodyClassElement.style.position = "relative";
bodyClassElement.style.width = "25.125em";
bodyClassElement.style.height = "15.75em";
bodyClassElement.style.backgroundRepeat = "no-repeat";
bodyClassElement.style.borderRadius = "0.125em";
bodyClassElement.style.padding = "0.375em 0.5625em";
bodyClassElement.style.backgroundSize = "100%, 51%, 51%";

const volumeElement = document.querySelector(".volume");
volumeElement.style.position = "absolute";
volumeElement.style.bottom = "100%";
volumeElement.style.left = "2.625em";
volumeElement.style.width = "1.6875em";
volumeElement.style.height = "0.03125em";
volumeElement.style.backgroundColor = "#555";

const screenElement = document.querySelector(".screen");
screenElement.style.display = "flex";
screenElement.style.boxSizing = "content-box";
screenElement.style.position = "relative";
screenElement.style.width = "21em";
screenElement.style.height = "13em";
screenElement.style.background =
  'url("https://media3.giphy.com/media/TRebCjNbc4dIA/giphy.gif?cid=ecf05e47mlycqx6oqkqntjx4eytz7f61dnx6u28fytomg106&rid=giphy.gif&ct=g") no-repeat';
screenElement.style.backgroundSize = "cover";
screenElement.style.border = "1em solid #000";
screenElement.style.borderLeftWidth = "1.5em";
screenElement.style.borderRightWidth = "1.5em";
screenElement.style.borderRadius = "0.375em";
screenElement.style.overflow = "hidden";

const captureElement = document.querySelector(".capture");
captureElement.style.position = "absolute";
captureElement.style.bottom = "2.875em";
captureElement.style.right = "0.8125em";
captureElement.style.width = "0.6875em";
captureElement.style.height = "0.6875em";
captureElement.style.backgroundColor = "#444";
captureElement.style.borderRadius = "0.09375em";
captureElement.style.cursor = "pointer";

const homeElement = document.querySelector(".home");
homeElement.style.position = "absolute";
homeElement.style.bottom = "2.8125em";
homeElement.style.left = "0.75em";
homeElement.style.width = "0.875em";
homeElement.style.height = "0.875em";
homeElement.style.backgroundColor = "#444";
homeElement.style.borderRadius = "50%";
homeElement.style.cursor = "pointer";

// left btn

const FirstLeftBtnElement = document.querySelector(".button-left:nth-child(1)");
FirstLeftBtnElement.style.top = "0";
FirstLeftBtnElement.style.left = "50%";

const SecondLeftBtnElement = document.querySelector(
  ".button-left:nth-child(2)"
);
SecondLeftBtnElement.style.top = "50%";
SecondLeftBtnElement.style.right = "0";

const ThirdLeftBtnElement = document.querySelector(".button-left:nth-child(3)");
ThirdLeftBtnElement.style.bottom = "0";
ThirdLeftBtnElement.style.left = "50%";

const FourthLeftBtnElement = document.querySelector(
  ".button-left:nth-child(4)"
);
FourthLeftBtnElement.style.top = "50%";
FourthLeftBtnElement.style.left = "0";

/// right btn

const FirstRightBtnElement = document.querySelector(
  ".button-right:nth-child(1)"
);
FirstRightBtnElement.style.top = "0";
FirstRightBtnElement.style.left = "50%";

const SecondRightBtnElement = document.querySelector(
  ".button-right:nth-child(2)"
);
SecondRightBtnElement.style.top = "50%";
SecondRightBtnElement.style.right = "0";

const ThirdRightBtnElement = document.querySelector(
  ".button-right:nth-child(3)"
);
ThirdRightBtnElement.style.bottom = "0";
ThirdRightBtnElement.style.left = "50%";

const FourthRightBtnElement = document.querySelector(
  ".button-right:nth-child(4)"
);
FourthRightBtnElement.style.top = "50%";
FourthRightBtnElement.style.left = "0";

// shoulder

const shoulderLeft = document.querySelector(".shoulder.l");
const shoulderRight = document.querySelector(".shoulder.r");

shoulderLeft.style.top = "-0.125em";
shoulderLeft.style.right = "-0.125em";

shoulderRight.style.top = "-0.125em";
shoulderRight.style.right = "-0.125em";

function shoulderLeftAction() {
  shoulderLeft.style.top = "-0.0625em";
  shoulderLeft.style.left = "-0.0625em";
}

function shoulderRightAction() {
  shoulderRight.style.top = "-0.0625em";
  shoulderRight.style.right = "-0.0625em";
}

function shoulderLeftActionCancel() {
  shoulderLeft.style.top = "-0.125em";
  shoulderLeft.style.left = "-0.125em";
}

function shoulderRightActionCancel() {
  shoulderRight.style.top = "-0.125em";
  shoulderRight.style.right = "-0.125em";
}

shoulderLeft.addEventListener("mousedown", shoulderLeftAction);
shoulderLeft.addEventListener("mouseup", shoulderLeftActionCancel);

shoulderRight.addEventListener("mousedown", shoulderRightAction);
shoulderRight.addEventListener("mouseup", shoulderRightActionCancel);
