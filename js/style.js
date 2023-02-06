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
