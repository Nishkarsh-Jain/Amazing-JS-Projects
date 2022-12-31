const searchBoxEl=document.querySelector(".search-bar-container");
const serachIcon=document.getElementById("magnifier");

serachIcon.addEventListener("click", ()=>{
searchBoxEl.classList.toggle("active");

})