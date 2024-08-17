let todoName = ["make dinner", "wash dinner"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoName.length; i++) {
    const todo = todoName[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHeight = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  console.log(name);
  todoName.push(name);
  console.log(todoName);

  inputElement.value = "";
  renderTodoList();
}
