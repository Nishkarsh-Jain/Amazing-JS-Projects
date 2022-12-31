const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const iconEl = document.querySelector(".fa-solid");

const preloader=document.querySelector(".preloader");

window.addEventListener("load", ()=>{
preloader.style.zIndex="-2";
});

btnEl.addEventListener("click", () => {
  if (btnEl.classList.contains("pause")) {
    btnEl.classList.remove("pause");
    iconEl.classList.remove("fa-circle-play");
    iconEl.classList.add("fa-circle-pause");
    videoEl.play();
  } else {
    btnEl.classList.add("pause");
    videoEl.pause();
    iconEl.classList.add("fa-circle-play");
    iconEl.classList.remove("fa-circle-pause");
  }
});
