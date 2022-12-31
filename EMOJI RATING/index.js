const emojiEls = document.querySelectorAll(".far");
const starEls = document.querySelectorAll(".fa-star");
const colorsArray = ["red", "orange", "blue", "green", "gold"];

updateRating(0);

starEls.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    console.log("clicked", index);
    updateRating(index);
  });
});

function updateRating(index) {
  starEls.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  emojiEls.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
