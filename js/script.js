// NAV MOBILE
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

// COUNTER NUMERI HERO
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const value = Math.min(Math.floor(progress / duration * target), target);
    el.textContent = value.toLocaleString("it-IT");
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stat span").forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!isNaN(target)) {
      animateCounter(el, target);
    }
  });
});

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);
