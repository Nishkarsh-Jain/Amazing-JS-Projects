const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  // We take .text margin as 50px as well...
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
