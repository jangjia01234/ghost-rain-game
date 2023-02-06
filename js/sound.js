let audioOffBtn = document.querySelector(".icon_volume_off");
let audioOnBtn = document.querySelector(".icon_volume_on");

audioOnBtn.addEventListener("click", function () {
  var audio = new Audio("./audio/Tropical_Thunder.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  audio.play();
  audioOnBtn.style.display = "none";
  audioOffBtn.style.display = "block";

  audioOffBtn.addEventListener("click", function () {
    audio.volume = 0;
    audioOffBtn.style.display = "none";
    audioOnBtn.style.display = "block";
  });
});
