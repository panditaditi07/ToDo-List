// import { faker } from "faker";
export const taskConstructor = function (description) {
  this.description = description;
  this.taskId = faker.random.uuid();
};
