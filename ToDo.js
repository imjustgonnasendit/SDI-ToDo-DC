// add listener to document page, to track button click to run addTask
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

window.onload = function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let taskInputText = input.value;
    console.log(taskInputText);
    if (taskInputText !== "") {
      addTask(taskInputText);
      taskInputText = "";
    }
    input.value = "";
  });
};

function addTask(inputText) {
  // create list elements
  const li = document.createElement("li");

  // list items
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  // checkbox: strike-through text logic
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });

  const label = document.createElement("label");
  label.textContent = inputText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  // remove button: remove list logic
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  // append task-item, inputText, remove-button
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);

  document.getElementById("task-list").appendChild(li);
}
