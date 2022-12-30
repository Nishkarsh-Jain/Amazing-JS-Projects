const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const currentTime = new Date().getTime();
  //console.log(currentTime, newYearTime);
  const gap = newYearTime-currentTime;

  const seconds = 1000; /*1sec=1000 milli se */
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  daysEl.innerText = remainingDays;
  hoursEl.innerText = remainingHours;
  minutesEl.innerText = remainingMinutes;
  secondsEl.innerText = remainingSeconds;
  setTimeout(updateCountdown, 1000);
}
