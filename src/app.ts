window.onload = function () {
  const addButton: HTMLElement | null = document.getElementById("add-button");
  const addInput: HTMLInputElement = document.getElementById(
    "new-task"
  ) as HTMLInputElement;
  const tasks: HTMLElement | null = document.getElementById("tasks");

  if (addButton) {
    addButton.addEventListener("click", (_) => {
      console.log(addInput.value);
      const id = Date.now();
      window.localStorage.setItem(id.toString(), addInput.value);
      console.log(tasks);
      const newTask = document.createElement("li");
      const newTaskContent = document.createTextNode(addInput.value);
      newTask.appendChild(newTaskContent);
      tasks?.appendChild(newTask);
    });
  }
};
