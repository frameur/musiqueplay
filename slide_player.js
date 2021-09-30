let audio = document.getElementById("player");
let count = 0;

function playPause(hupy) {
  document.getElementById("player").src = hupy;

  if (count == 0) {
    count = 1;
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
}
//slider
const slides = document.querySelectorAll(".slides");
const prev = document.querySelector(".prev1");
const next = document.querySelector(".next1");

i = 0;

function ActiveSlide(n) {
  for (slide of slides) slide.classList.remove("active");
  slides[n].classList.add("active");
}

//function for next btn
next.addEventListener("click", function () {
  if (i == slides.length - 1) {
    i = 0;
    ActiveSlide(i);
  } else {
    i++;
    ActiveSlide(i);
  }
});
//function for prev btn
prev.addEventListener("click", function () {
  if (i == 0) {
    i = slides.length - 1;
    ActiveSlide(i);
  } else {
    i--;
    ActiveSlide(i);
  }
});
