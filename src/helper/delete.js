import { getTodo, saveTodo, todoList } from "../data.js";

export const deleteItem = function (id) {
  const result = todoList.filter(function (list) {
    return list.id == id;
  });
  console.log(result[0]);
  console.log(todoList.indexOf(result[0]));
  console.log(todoList.splice(todoList.indexOf(result[0]), 1));
  saveTodo();
};
