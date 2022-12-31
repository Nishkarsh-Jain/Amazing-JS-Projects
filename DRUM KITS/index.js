const kits = ["snare", "kick", "crash", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  containerEl.appendChild(btnEl);
  btnEl.innerText = kit;
  btnEl.classList.add("btn");
  btnEl.style.backgroundImage = "url(Images/" + kit + ".jpg)";

  const audioEl = document.createElement("audio");
  audioEl.src = "Sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    //console.log(event);
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
