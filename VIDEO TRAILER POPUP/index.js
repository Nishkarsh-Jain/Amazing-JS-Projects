const btnEl=document.querySelector(".btn");
const closeEl=document.querySelector(".close-icon");
const videoEl=document.querySelector("video");
const trailerContainerEl=document.querySelector(".trailer-container");

btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");
})

closeEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    //To restart the viddo from start...
    videoEl.pause();
    videoEl.currentTime=0;
})