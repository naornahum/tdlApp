const todos = JSON.parse(window.localStorage.getItem("todos")) || [];

function renderTodos() {
  document.querySelector("#tasks").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(todos[i].value));
    document.querySelector("#tasks").appendChild(list);
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
