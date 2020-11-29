import { formSubmission } from "./helper/formSubmission.js";
import { isInputValid } from "./helper/inputValidation.js";
import { getTodo } from "./data.js";
import { Task } from "./components/task.js";

window.onload = () => {
  document.forms.userInput.addEventListener("submit", formSubmission);
  getTodo();
};
document.forms.userInput.taskButton.addEventListener("click", () => {
  if (isInputValid(document.forms.userInput.taskInput.value) == false) {
    // console.log(isInputValid(document.forms.userInput.taskInput.value));
    document.forms.userInput.taskInput.style.border = "2px solid red";
  } else {
    document.forms.userInput.taskInput.style.border = "1px solid white";
  }
});
