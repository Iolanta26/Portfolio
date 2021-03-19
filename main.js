let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");
let buttonMobile = document.getElementById("mobileButton");
let nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
let skillBar = document.querySelector(".bar");

function textAppear() {
  let sectionText = document.querySelector(".paragraph");
  let textPosition = sectionText.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (textPosition < screenPosition) {
    sectionText.classList.add("paragraph-appear");
  }
}

window.addEventListener("scroll", textAppear);

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.background = "#ffffffb3";
    header.style.padding = "0.5rem";
    buttonBackToTop.style.display = "block";
    skillBar.style.visibility = "visible";
  } else {
    header.style.background = "transparent";
    header.style.padding = "1rem";
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);

let i = 0;
var txt = "My name is Iolanta. Future Front-end developer"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("herobanner-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
