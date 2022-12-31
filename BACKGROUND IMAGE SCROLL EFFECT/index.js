const bgImgEl = document.getElementById("bg-img");

window.addEventListener("scroll", () => {
  updateBgImage();
});

function updateBgImage() {
  // We are taking 700 so the output is less than 1 & result is positive, if it's -ve then also we don't have any issue.
  //console.log(window.pageYOffset / 700, 1 - window.pageYOffset / 700);
  bgImgEl.style.opacity = 1 - window.pageYOffset / 700;
  /* We have taken the backgroundSize=160% initially , 12 is taken randomly */
  bgImgEl.style.backgroundSize = 140 - window.pageYOffset / 12 + "%";
}
