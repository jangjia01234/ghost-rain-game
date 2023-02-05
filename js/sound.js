// const audioContainer = document.querySelector(".audioContainer");
var audio = new Audio("./audio/Arcade_Kid.mp3");
audio.loop = true;
audio.volume = 0.5;
audio.play();

let audioOffBtn = document.querySelector(".icon_volume_off");

let audioOnBtn = document.querySelector(".icon_volume_on");

audioOffBtn.addEventListener("click", function () {
  audio.pause();
  audioOffBtn.style.display = "none";
  audioOnBtn.style.display = "block";
  audioOnBtn.addEventListener("click", function () {
    audio.play();
  });
});
