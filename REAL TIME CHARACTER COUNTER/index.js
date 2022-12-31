const textareaEl = document.querySelector(".textarea");
const totalCharacterEl = document.querySelector(".total-counter");
const remainingCharaterEl = document.querySelector(".remaining-counter");

totalCharacterEl.innerText=0;
remainingCharaterEl.innerText=textareaEl.getAttribute("maxlength") ;

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCharacterEl.innerText = textareaEl.value.length;
  remainingCharaterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
