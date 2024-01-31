document.addEventListener("DOMContentLoaded", () => {

  const list = document.querySelector(".list");
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");

 localStorage.setItem("tasks", []);
  console.log(`Tasks form local Storage: `, localStorage.getItem("tasks"));
  //If we have no saved tasks (NULL) - set tasks array to empty array!
  let tasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks") : [];
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
      //Saving Array to the local Storage
      localStorage.setItem("tasks", tasks);
      //console.log(`Array from Local Storage:`, localStorage.getItem("tasks"));
      input.value = "";
    }
    console.log(tasks);
  }


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
}


})