

// Ladefenster
window.addEventListener("load", function() {
    var ladebildschirm = document.getElementById("ladebildschirm");
    ladebildschirm.style.display = "none";
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