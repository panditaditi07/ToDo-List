import { formSubmission } from "../helper/formSubmission.js";
import { taskConstructor } from "../helper/taskConstructor.js";
import { deleteItem } from "../helper/delete.js";
import { getTodo, saveTodo } from "../data.js";
// import { completeButton, deleteButton } from "./buttons.js";
export const Task = (taskObject) => {
  // ========= adding div ===========
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //======== adding li ==================
  const newToDo = document.createElement("li");
  newToDo.id = taskObject.taskId;
  newToDo.innerHTML = taskObject.description;
  newToDo.classList.add("todo-item");
  //============adding event Listner===============
  todoDiv.addEventListener("click", () => {
    newToDo.style.textDecoration = "line-through";
  });
  todoDiv.addEventListener("dblclick", () => {
    deleteItem(taskObject.taskId);
    todoDiv.removeChild(newToDo);
  });
  saveTodo();
  todoDiv.appendChild(newToDo);
  return todoDiv;
};
