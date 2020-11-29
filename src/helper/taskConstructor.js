// import { faker } from "faker";
import { Task } from "../components/task.js";
import { saveTodo, getTodo } from "../data.js";
export const taskConstructor = function (description) {
  this.description = description;
  this.taskId = faker.random.uuid();
};
