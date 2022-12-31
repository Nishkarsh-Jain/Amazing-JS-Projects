const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepEls = document.querySelectorAll(".step");
const progressBarEl = document.querySelector(".progress-bar-front");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepEls.length) {
    currentChecked = stepEls.length;
  }
  updateStepProgress();
  console.log(currentChecked);
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepEls.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = ` <i class="fa-solid fa-check"></i><small>${
        idx === 0
          ? "Start"
          : idx === stepEls.length - 1
          ? "Completed"
          : "Step " + idx
      }</small>`;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = ` <i class="fa-solid fa-xmark"></i><small>`;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");
  progressBarEl.style.width =
    ((checkedNumber.length - 1) / (stepEls.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepEls.length) {
    nextEl.disabled = true;
  }
}
