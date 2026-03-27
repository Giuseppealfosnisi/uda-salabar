/* ===========================
   MENU MOBILE
=========================== */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}



/* ===========================
   SLOT MACHINE COUNTER
=========================== */
function slotCounter(el, target) {
  let value = 0;
  let velocity = target
