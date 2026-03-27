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
  let velocity = target / 8;
  let slowdown = 0.92;
  let started = false;

  function update() {
    value += velocity;
    velocity *= slowdown;

    if (value >= target) {
      el.textContent = target.toLocaleString("it-IT");
      return;
    }

    el.textContent = Math.floor(value).toLocaleString("it-IT");
    requestAnimationFrame(update);
  }

  return () => {
    if (!started) {
      started = true;
      update();
    }
  };
}



/* ===========================
   AVVIO CONTATORI
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  const counters = [];
  document.querySelectorAll(".stat span").forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!isNaN(target)) counters.push(slotCounter(el, target));
  });

  const hero = document.querySelector(".hero");

  // Se l'hero è visibile → parte quando entra in vista
  if (hero) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(start => start());
        }
      });
    }, { threshold: 0.4 });

    observer.observe(hero);
  }

  // Se l'utente entra in una sezione diversa dall'hero → parte subito
  if (window.location.hash && window.location.hash !== "#home") {
    counters.forEach(start => start());
  }
});



/* ===========================
   REVEAL ON SCROLL
=========================== */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);



/* ===========================
   SCROLL PROGRESS BAR
=========================== */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});
