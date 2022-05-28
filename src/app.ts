const todos = JSON.parse(window.localStorage.getItem("todos")) || [];

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(index));
  renderTodos();
}

function renderTodos() {
  document.querySelector("#tasks").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(todos[i].value));
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTodo(i);
    });
    listItem.appendChild(deleteButton);
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
      todos.push({ value: addInput.value });
      renderTodos();
    });
  }
};
