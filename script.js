let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

function showSlide(i) {
  if (i < 0) index = Math.ceil(slide.length / 3) - 1;
  else if (i >= Math.ceil(slide.length / 3)) index = 0;
  else index = i;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));
