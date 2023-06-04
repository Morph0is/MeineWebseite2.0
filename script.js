// Ladefenster
window.addEventListener("load", function() {
  var ladebildschirm = document.getElementById("ladebildschirm");
  ladebildschirm.style.display = "none";
});


// Hamburger Menü
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (
    !targetElement.closest(".nav-menu") &&
    !targetElement.closest(".hamburger")
  ) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});



  