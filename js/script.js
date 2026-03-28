window.addEventListener("scroll", function () {
const header = document.querySelector("header");
if (window.scrollY > 50) {
header.style.background = "#1f3d2b";
} else {
header.style.background = "rgba(0,0,0,0.6)";
}
});

document.querySelectorAll("a").forEach(anchor => {
anchor.addEventListener("click", function (e) {
const target = this.getAttribute("href");

```
if (target.startsWith("#") && document.querySelector(target)) {
  e.preventDefault();
  document.querySelector(target).scrollIntoView({
    behavior: "smooth"
  });
}
```

});
});
