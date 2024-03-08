// Accessing/Target elements
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.getElementsByTagName("button");
const taskList = document.querySelector("#taskList");

// Adding event listener for form submission
taskForm.addEventListener("submit", handleAddTask);

let taskNumber = 1;     // this will be used to delete the certain task
// Function to add a task
function handleAddTask(e) {
  e.preventDefault();

  const taskInputValue = taskInput.value.trim();
  const errorMessage = "Please enter your task name";

  const isErrorMessageNodeExist = document.querySelector("#error");
  if (isErrorMessageNodeExist !== null) isErrorMessageNodeExist.remove();

  if (taskInputValue !== "") {
    const taskToAdd = `<div style="display:flex; flex-direction:row; margin-bottom:2px">
    <li id="task${taskNumber}">${taskInput.value}
    <button id="btn${taskInput.value}" onclick="deleteTask(task${taskNumber})">
    Delete
    </button>
    </li>
    </div>`;

    taskList.innerHTML += taskToAdd;
    taskNumber += 1;
  } else {
    const errorMessageNode = document.createElement("p");
    errorMessageNode.textContent = errorMessage;
    errorMessageNode.setAttribute("id", "error");   // this is used to remove the error
    errorMessageNode.setAttribute("style", "color:red; font-weight: bold;");

    taskForm.after(errorMessageNode);
  }
}

// Function to delete a task
function deleteTask(task) {
    task.remove();
}
