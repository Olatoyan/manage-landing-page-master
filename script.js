"use strict";

const testimonialSlider = document.querySelector(".testimonials__slider");
const slider = document.querySelectorAll(".slider");
const testimonialBox = document.querySelectorAll(".testimonial__box");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const submit = document.querySelector(".footer__submit");
const emailInput = document.querySelector(".footer__email");
const invalid = document.querySelector(".invalid");
const header = document.querySelector(".header");
const navOpen = document.querySelector(".nav-open");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav__link");

const overlay = document.querySelector(".overlay");

const closeOverlay = function () {
  header.classList.remove("nav-open");
};

openBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeOverlay);
});

closeBtn.addEventListener("click", closeOverlay);
overlay.addEventListener("click", closeOverlay);

const goToSlide = function (slide) {
  slider.forEach(
    (slides, i) =>
      (slides.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);
let curSlide = 0;
const maxSlide = slider.length;

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

const validEmail = function () {
  if (!emailInput.validity.valid || emailInput.value === "") {
    invalid.style.display = "block";
  } else {
    invalid.style.display = "none";
  }
};

// submit.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

submit.addEventListener("submit", validEmail);
