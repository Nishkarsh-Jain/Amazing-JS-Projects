const imgContainerEl = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  additionalImages();
});

function additionalImages() {
  for (let i = 0; i < 10; i++) {
    const newImageEl = document.createElement("img");
    const number = Math.floor(Math.random() * 2000);
    newImageEl.src = "https://picsum.photos/300?random=" + number;
    imgContainerEl.appendChild(newImageEl);
  }
}
