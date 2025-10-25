// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  const ul = navMenu.querySelector("ul");
  ul.style.display = ul.style.display === "flex" ? "none" : "flex";
});
