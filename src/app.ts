const todos = JSON.parse(window.localStorage.getItem("todos")) || [];

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function editTodo(index, editedTodoText) {
  todos[index].value = editedTodoText;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function editProgressTodo(index, isDone) {
  todos[index].isDone = isDone;
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function renderTodos() {
  document.querySelector("#tasks").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todos[i].value));

    const isDone = document.createElement("INPUT") as any;
    isDone.setAttribute("type", "checkbox");
    isDone.checked = todos[i].isDone;
    isDone.addEventListener("change", (event) => {
      editProgressTodo(i, (event.currentTarget as any).checked);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTodo(i);
    });

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", () => {
      editTodo(i, "WOP");
    });

    listItem.appendChild(isDone);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    document.querySelector("#tasks").appendChild(listItem);
  }
}

window.onload = function () {
  renderTodos();
  const addButton: HTMLElement | null = document.getElementById("add-button");
  const addInput: HTMLInputElement = document.getElementById(
    "new-task"
  ) as HTMLInputElement;

  if (addButton) {
    addButton.addEventListener("click", (_) => {
      console.log(addInput.value);
      window.localStorage.setItem("todos", JSON.stringify(todos));
      console.log(todos);
      todos.push({ value: addInput.value, isDone: false });
      renderTodos();
    });
  }
};
