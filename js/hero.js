const heroElement = document.createElement("div");
const bgElement = document.querySelector(".bg_image");

heroElement.style.position = "absolute";
heroElement.style.top = "0";
heroElement.style.left = "0";

heroElement.style.width = HERO_WIDTH + "px";
heroElement.style.height = HERO_HEIGHT + "px";
heroElement.style.background = 'url("./images/hero.png") no-repeat';

bgElement.appendChild(heroElement);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    heroElement.style.backgroundPosition = "-70px";
  } else if (e.key === "ArrowRight") {
    heroElement.style.backgroundPosition = "-105px";
  } else if (e.key === "ArrowDown") {
    heroElement.style.backgroundPosition = "-35px";
  } else {
    heroElement.style.backgroundPosition = "0";
  }
});

// const heroElement = document.getElementsByClassName("hero")[0];

// document.addEventListener("keydown", function (e) {
//   //   const heroLeft = getComputedStyle(heroElement).left;
//   //   const heroLeftNum = heroLeft.split("px")[0];

//   let key = e.key || e.keyCode;

//   if (key === "Left" || key === 37) {
//     // heroElement.style.left = heroLeftNum - 1 + "px";
//     // heroElement.className = "left";
//     console.log("left");
//   } else if (key === "Right" || key === 39) {
//     // heroElement.style.left = heroLeftNum + 1 + "px";
//     // heroElement.className = "right";
//     console.log("right");
//   } else {
//     console.log("error occured!");
//   }
// });

// document.addEventListener("keyup", function () {
//   heroElement.className = "stop";
// });
