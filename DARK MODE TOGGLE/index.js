const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const circleEl = document.querySelector(".circle");
const labelEl = document.querySelector(".label");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
    labelEl.style.backgroundColor = "white";
    circleEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
    labelEl.style.backgroundColor = "black";
    circleEl.style.backgroundColor = "white";
  }
}

inputEl.addEventListener("click", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
