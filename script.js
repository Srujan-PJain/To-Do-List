document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                ${taskText}
                <button class="delete-button">Delete</button>
            `;
      taskList.appendChild(li);
      taskInput.value = "";

      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", deleteTask);
    }
  }

  function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
});
