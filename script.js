window.addEventListener("load", function() {
  var ladebildschirm = document.getElementById("ladebildschirm");
  ladebildschirm.classList.add("hidden");
});



// Hamburger Menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenuItems = document.querySelectorAll(".close-menu");

hamburger.addEventListener("click", (event) => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

closeMenuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-menu") && !event.target.closest(".hamburger")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});





  