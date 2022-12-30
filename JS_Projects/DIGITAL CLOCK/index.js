const hourEl = document.getElementById("hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let ampm = "AM";

  if (hours > 12) {
    hours -= 12;
    ampm = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutess : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
