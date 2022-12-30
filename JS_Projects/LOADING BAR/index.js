const counterEl = document.querySelector(".counter");
const forntLoadingBar = document.querySelector(".loading-bar-front");

let index = 0;
updateNumber();

function updateNumber() {
  counterEl.innerText = index + "%";
  forntLoadingBar.style.width = index + "%";
  index++
  if(index<101){
    setTimeout(updateNumber, 200)
  }
}
