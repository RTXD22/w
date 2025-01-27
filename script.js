const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposisition = window.scrollY;

  if (scrollposisition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposisition <= 60) {
    nav.classList.remove("nav-dark");
  }
});
