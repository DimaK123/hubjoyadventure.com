const navLinks = document.querySelector('.nav__links');
const arrOfNavLinks = document.querySelectorAll(".nav__link");
const navButton = document.querySelector('.top-bar__button');
const header = document.querySelector('.header');
const body = document.querySelector('.page__body');

function pageNavigation() {
  navButton.classList.toggle('top-bar__button--close');
  navLinks.classList.toggle('nav__links--open');
  header.classList.toggle('header--menu');
  body.classList.toggle('page__body--fixed');
}

function isLargeScreen() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

navButton.addEventListener('click', pageNavigation);

arrOfNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isLargeScreen()) {
      pageNavigation();
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
      navLinks.classList.add("nav__links--dark-green");
  } else {
      navLinks.classList.remove("nav__links--dark-green");
  }
});