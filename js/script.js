// Navbar cambia colore allo scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "#1f3d2b";
  } else {
    header.style.background = "rgba(0,0,0,0.6)";
  }
});

// Scroll fluido
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
