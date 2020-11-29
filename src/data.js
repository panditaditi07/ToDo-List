//save data to local storage
import { Task } from "./components/task.js";
export const saveTodo = (taskObject) => {
  var str = JSON.stringify(taskObject);
  localStorage.setItem(taskObject.taskId, str);
};
//get data from local storage
export function getTodo() {
  for (let i = 0; i < localStorage.length; i++) {
    // JSON.parse(localStorage.getItem(localStorage.key(i)));
    var display = Task(JSON.parse(localStorage.getItem(localStorage.key(i))));
    const user_list = document.getElementById("userList");
    user_list.appendChild(display);
  }
}
