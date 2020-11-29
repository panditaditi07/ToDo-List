export let todoList = [];
//save data to local storage
export function saveTodo() {
  var str = JSON.stringify(todoList);
  localStorage.setItem("todos", str);
}
//get data from local storage
export function getTodo() {
  var str = localStorage.getItem("todos");
  todoList = JSON.parse(str);
  if (!todoList) {
    todoList = [];
  }
}
