const containerEl = document.querySelector(".container");
const popupContainerEl = document.querySelector(".popup-container");
const btnEl = document.querySelector(".btn");
const popupBtnEl = document.querySelector(".popup-btn");
const closeEl = document.querySelector(".close-btn");

btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});

popupBtnEl.addEventListener("click", () => {});
