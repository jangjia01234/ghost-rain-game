const ghostElement = document.createElement("div");
const bgElement = document.querySelector(".bg_image");

ghostElement.style.position = "absolute";
ghostElement.style.top = "0";
ghostElement.style.left = "50%";

ghostElement.style.width = GHOST_WIDTH + "px";
ghostElement.style.height = GHOST_HEIGHT + "px";
ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

bgElement.appendChild(ghostElement);
