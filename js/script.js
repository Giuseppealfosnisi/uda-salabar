console.log("Sito caricato correttamente");

// Effetto navbar scroll (opzionale)
window.addEventListener("scroll", () => {
const nav = document.querySelector(".navbar");

if (window.scrollY > 50) {
nav.style.background = "rgba(0,0,0,0.8)";
} else {
nav.style.background = "transparent";
}
});
