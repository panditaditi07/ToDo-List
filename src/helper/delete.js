import { getTodo, saveTodo } from "../data.js";

export const deleteItem = (id) => {
  localStorage.removeItem(id);
};

// export const deleteItem = function (id) {
//   const result = l.filter(function (list) {
//     return list.id == id;
//   });
//   console.log(result[0]);
//   console.log(todoList.indexOf(result[0]));
//   console.log(todoList.splice(todoList.indexOf(result[0]), 1));
//   saveTodo();
// };
