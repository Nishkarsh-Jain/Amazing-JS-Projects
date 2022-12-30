const formEl = document.querySelector(".form");
const checkedEl = document.querySelector(".fa-check-square");
const trashEl = document.querySelector(".fa-trash");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

let list = JSON.parse(localStorage.getItem("list"));

list.forEach((task) => {
  toDoList(task);
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkedEl = document.createElement("div");
  checkedEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkedEl);

  const deleteEl = document.createElement("div");
  deleteEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(deleteEl);

  checkedEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  deleteEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });

  localStorage.setItem("list", JSON.stringify(list));
}
