const hamburger = document.querySelector(".hamburger");
// const image = document.querySelector(".first_image").img;
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open_nav");
  if (menu.classList.contains("menu") && menu.classList.contains("open_nav")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
});
