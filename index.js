const list = document.querySelector(".list");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const resetBtn = document.querySelector(".resetBtn");
let tasks = [];
//If we have no saved tasks (NULL) - set tasks array to empty array!
// let tasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks") : [];
document.addEventListener("DOMContentLoaded", () => {
  console.log(`Loading tasks...`);
  console.log(`Local Storage DB content: `, localStorage.getItem("tasks"));

  tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

  console.log(`Local tasks array content: `, tasks);
  console.log(`Initial tasks Array length: `, tasks.length);

  // if (tasks.length != 0) {
  renderTodo(tasks)
  // } else {
  console.log(`There are nothing to render`);
  // };
});
//Inint end
console.log(`Inint complete`);

// Add a new task
btn.addEventListener("click", (event) => {
  event.preventDefault();
  todoHandler();
  renderTodo(tasks);
});

//Remove the task 
window.removeTodo = function (id) {
  const filteredTasks = tasks.filter((item) => item.id !== id);
  tasks = filteredTasks;
  renderTodo(tasks);
}
//Complete the task
const toggleTask = (id) => {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTodo(tasks);
}

resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //localStorage.setItem("tasks", []);
  localStorage.clear();
  tasks = [];
  todoHandler();
  renderTodo(tasks);
});

//Functional section
const todoHandler = () => {
  if (input.value.trim() !== "") {
    const dataText = input.value;
    const rundomNumber = Math.round(Math.random() * 100000);
    const task = {
      id: rundomNumber,
      text: dataText,
      completed: false,
    };
    tasks.push(task);
    input.value = "";
  };
  console.log(tasks);
};
//items - input array of objects
// <input type="checkbox" class="checkbox" ${item.completed}>
//<p>${item.text}</p>
// function renderTodo(items) {
const renderTodo = (items = []) => {
  const marcup = items.map((item) => {
    return `
      <li>
        <label class="label">
          <input
            type="checkbox"
            class="checkbox"
            onchange="toggleTask(${item.id})"
            ${item.completed ? "checked" : ""}
          />
          <span class="custom__radio"></span>
        </label>
      <p class="${item.completed ? "completed" : ""}" >
        ${item.text}
      </p>
      <button 
        onclick="removeTodo(${item.id})">
          Видалити
      </button>
    </li>`
  }).join("");
  //console.log(marcup);
  list.innerHTML = marcup;
  //Saving Array to the local Storage
  localStorage.setItem("tasks", JSON.stringify(items));
}
