import { taskConstructor } from "./taskConstructor.js";
import { Task } from "../components/task.js";
import { isInputValid } from "./inputValidation.js";
import { saveTodo, getTodo } from "../data.js";

export const formSubmission = (event) => {
  event.preventDefault();
  let taskObject = new taskConstructor(event.target.taskInput.value);
  let taskValue = event.target.taskInput.value;
  if (isInputValid(taskValue)) {
    // todoList.push(taskObject);
    saveTodo(taskObject);
    const user_list = document.getElementById("userList");
    console.log(user_list);
    user_list.appendChild(Task(taskObject));
    event.target.taskInput.value = "";
  }
};
