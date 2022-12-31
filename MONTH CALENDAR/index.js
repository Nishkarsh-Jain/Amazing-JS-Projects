const monthIndex = new Date().getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[monthIndex]);

const monthEl = (document.querySelector(".date h1").innerHTML =
  months[monthIndex]);
//monthEl.innerText=months[monthIndex];
console.log(monthEl);

const monthDateEl = (document.querySelector(".date p").innerHTML =
  new Date().toDateString());
console.log(monthDateEl);
//----------------------------------------------------------------------------------------------

//const lastDayOfPreviousMonth=new Date(new Date().getFullYear(), monthIndex, 0);
let dates = "";
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay();
console.log(firstDay);

const lastDate = new Date(
  new Date().getFullYear(),
  monthIndex + 1,
  0
).getDate();
console.log(lastDate);

for (let i = firstDay; i > 0; i--) {
  dates += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDate; i++) {
  if (i === new Date().getDate()) {
    dates += `<div class="today">${i}</div>`;
  } else {
    dates += `<div>${i}</div>`;
  }
}

const dateEl = (document.querySelector(".days").innerHTML = dates);
//------------------------------------------------------------------------------------------------
