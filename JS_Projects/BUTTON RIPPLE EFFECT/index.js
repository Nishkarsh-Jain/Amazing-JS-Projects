const btnEl = document.querySelector(".btn");
const spanEl = document.querySelector(".span");

btnEl.addEventListener("mouseover", (event) => {
  //console.log(event.pageX);
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
  spanEl.style.color = "white";
});

btnEl.addEventListener("mouseout", (event) => {
  spanEl.style.color = "blue";
});
