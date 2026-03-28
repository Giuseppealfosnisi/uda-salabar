window.addEventListener("scroll", () => {
const nav = document.querySelector(".navbar");

if (window.scrollY > 50) {
nav.style.background = "rgba(0,0,0,0.85)";
} else {
nav.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)";
}
});
