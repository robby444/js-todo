const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoList = []

function newTodo() {
  let text = prompt("Enter your task");
  todoList.push({id: todoList.length + 1, text: text, checked: false});
  render(todoList);
  updateCounter();
}

function renderTodo(todo) {
  let checked = todo.checked ? "checked" : "";
  let spanClass = todo.checked ? "text-success text-decoration-line-through" : "";
  return `<li class="list-group-item">
        <input type="checkbox" class="form-check-input me-2" id="${todo.id}" onClick="checkTodo(${todo.id})" ${checked}/>
        <label for="${todo.id}"><span class="${spanClass}">${todo.text}</span></label>
        <button class="btn btn-danger btn-sm float-end" onClick="deleteTodo(${todo.id})">delete</button>
      </li>`
}

function render(todos) {
  let stringList = todos.map(task => renderTodo(task));
  list.innerHTML = "";
  stringList.map(s => list.insertAdjacentHTML("beforeend", s));
}

function updateCounter() {
  itemCountSpan.textContent = todoList.length;
  uncheckedCountSpan.textContent = todoList.filter(task => !task.checked).length;
}

function deleteTodo(id) {
  todoList = todoList.filter(task => task.id !== id);
  render(todoList);
  updateCounter();
}

function checkTodo(id) {
  let elementToCheck = todoList.filter(task => task.id === id)[0];
  elementToCheck.checked = true;
  render(todoList);
  updateCounter();
}