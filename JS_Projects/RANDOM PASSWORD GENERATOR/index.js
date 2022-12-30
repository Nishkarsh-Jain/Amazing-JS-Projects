const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) {
    // to avoid empty value copied...
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    //As we want our password to be generated within the give chars so we multiply it with the chars.length();
    password += chars.substring(randomNum, randomNum + 1);
    // console.log(password, randomNum);
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select(); /* For Desktop */
  inputEl.setSelectionRange(0, 9999); /* For mobile */
  navigator.clipboard.writeText(inputEl.value);
}
