document.addEventListener("DOMContentLoaded", () => {

  const list = document.querySelector(".list");
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");
  const resetBtn = document.querySelector(".resetBtn");


  console.log(`Tasks form local Storage: `, localStorage.getItem("tasks"));
  //If we have no saved tasks (NULL) - set tasks array to empty array!
  // let tasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks") : [];
  let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
  console.log(`Local tasks array: `,tasks);

  console.log(`Initial tasks Array length: `,tasks.length);
  if (tasks.length != 0) {
    renderTodo(tasks)
  } else {
    console.log(`There are no tasks to render`);
  };
//Inint end


  console.log();

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
  //Will be here

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
      const isCompleted = false;
      const task = {
        id: rundomNumber,
        text: dataText,
        completed: isCompleted
      };
      tasks.push(task);
      input.value = "";
    }
    console.log(tasks);
  }

//items - input array of objects
function renderTodo(items) {
  const marcup = items.map((item) => {
    return `<li>
    <label class="label">
    <input type="checkbox" class="checkbox" ${item.completed}>
    <span class="custom__radio"></span>
    </label>
    <p>${item.text}</p>
    <button onclick="removeTodo(${item.id})">Видалити</button>
    </li>`
  }).join("");
  console.log(marcup);
  list.innerHTML = marcup;
      //Saving Array to the local Storage
      localStorage.setItem("tasks", JSON.stringify(items));
      //console.log(`Array from Local Storage:`, localStorage.getItem("tasks"));

}


})