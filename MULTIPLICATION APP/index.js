const scoreEl = document.querySelector("#score");
const questionEl = document.querySelector("#question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

/* Generating random numbers 0-10 */
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//questionEl.innerHTML = "What is " + num1 + " multiply by " + num2 + " is?";
questionEl.innerText = `What is ${num1} multiply by ${num2} is?`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerHTML = "<u>Score:</u>"+score;

formEl.addEventListener("submit", () => {
  // Convertibg string to number using + operator
  const userAns = +inputEl.value;
  //console.log(userAns, typeof userAns);

  //Every time we enter the ans & submit the page get refresed hence score get 0 to prevent this we store score to local storage.
  if (num1 * num2 === userAns) {
    score++;
    updateLocalStorage();
    inputEl.style.backgroundColor = "rgb(128, 233, 8)";
  } else {
    score--;
    updateLocalStorage();
    inputEl.style.backgroundColor = "red";
  }
});

function updateLocalStorage() {
  // Remember we can only store STRING value in Local Storage.
  localStorage.setItem("score", JSON.stringify(score));
}
