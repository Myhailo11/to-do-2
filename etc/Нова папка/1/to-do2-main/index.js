const list = document.querySelector(".list");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

let tasks=[]

const todoHandler = () => {
  if (input.value.trim()!=="") {
    const dataText = input.value
    const rundomNumber = Math.round(Math.random() * 100000)
    const task = {
      id:rundomNumber,
      text:dataText,
      completed:false
      
    }
    tasks.push(task)
    input.value=""
  }
  console.log(tasks);
}

console.log();

btn.addEventListener("click",(event)=>{
  event.preventDefault()
  todoHandler()
  renderTodo(tasks)
})


function renderTodo(items) {
  const marcup = items.
  map((item)=>{
    return `<li>
    <label class="label">
    <input type="checkbox" class="checkbox" cheked="${item.completed}">
    <span class="custom__radio"></span>
    </label>
    <p>${item.text}</p>
    <button onclick="removeTodo(${item.id})">Видалити</button>
    </li>`
  })
  .join("")
  console.log(marcup);
  list.innerHTML=marcup
}

// function removeTodo(id) {
//   const filteredTasks = tasks.filter((item)=>item.id!==id)
//   tasks=filteredTasks
// }

window.removeTodo=function (id) {
  const filteredTasks = tasks.filter((item)=>item.id!==id)
  tasks=filteredTasks
  renderTodo(tasks) 
}