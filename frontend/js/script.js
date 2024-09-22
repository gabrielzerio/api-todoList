const tbody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector(".input-task");
import createRow from "./tasksRow.js";

const serverRoot = "http://192.168.0.144:3333";

const addTask = async (event) => {
  const task = { title: inputTask.value };

  event.preventDefault();
  await fetch(serverRoot + "/tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  loadTasks();
  inputTask.value = "";
};


const fetchTasks = async () => {
  const response = await fetch(serverRoot + "/tasks");
  const tasks = await response.json();
  return tasks;
};

const loadTasks = async () => {
  const tasks = await fetchTasks();
  tbody.innerHTML = "";
  tasks.forEach((task) => {
    const tr = createRow(task, loadTasks);
    tbody.appendChild(tr);
  });
};

loadTasks();

addForm.addEventListener("submit", addTask);
