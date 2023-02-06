// upside bar style

const barUpsideWrapElement = document.querySelector(".bar_upside_wrap");
barUpsideWrapElement.style.display = "flex";
barUpsideWrapElement.style.justifyContent = "space-between";
barUpsideWrapElement.style.alignItems = "center";

const barUpsideElement = document.querySelector(".bar_upside");
barUpsideElement.style.position = "fixed";
barUpsideElement.style.top = "20px";
barUpsideElement.style.fontSize = "30px";
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

// left

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

/// right

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

// switch style

const htmlElement = document.querySelector("html");
htmlElement.style.boxSizing = "border-box";
htmlElement.style.fontFamily = "Silkscreen, cursive";

const bodyElement = document.querySelector("body");
bodyElement.style.display = "flex";
bodyElement.style.height = "100vh";
bodyElement.style.fontSize = "2em";
bodyElement.style.backgroundColor = "#eee";

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
screenElement.style.background = 'url("./images/bg.png") no-repeat';
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
