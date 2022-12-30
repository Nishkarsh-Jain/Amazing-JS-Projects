const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
  "Sunday"
];

let currentDate = new Date();

monthNameEl.innerText = currentDate.toLocaleString("en", {month:"long"});
dayNameEl.innerText = currentDate.toLocaleString("en", {weekday:"long"});
dateEl.innerText = currentDate.getDate();
yearEl.innerText=currentDate.getFullYear();
