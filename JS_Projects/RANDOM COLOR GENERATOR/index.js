const containerEl = document.querySelector(".container");

/* Creating div using js */
for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateRandomColor();

function generateRandomColor() {
  colorContainerEls.forEach((colorContainerEl) => {
    let newColorCode = randomColorCodeGenerator();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColorCodeGenerator() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
  //  console.log(randomNumber);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
