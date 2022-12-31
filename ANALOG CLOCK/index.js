const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secondEl=document.querySelector(".second");
/*
For Cross Checking-
console.log(hourEl);
console.log(minuteEl);
console.log(secondEl);
*/

function updateClock(){
    const currentDate=new Date();
    console.log(currentDate);
    const hour=currentDate.getHours();
    const minute=currentDate.getMinutes();
    const second=currentDate.getSeconds();
   // console.log(hour, minute, second);
    const hourToDegree=(hour/12)*360;
    hourEl.style.transform=`rotate(${hourToDegree}deg)`;
    const minuteToDegree=(minute/60)*360;
    minuteEl.style.transform=`rotate(${minuteToDegree}deg)`;
    const secondToDegree=(second/60)*360;
    secondEl.style.transform=`rotate(${secondToDegree}deg)`;
}

setInterval(updateClock, 1000);

