const form = document.getElementById("task-form"); // global const for the input textfield and submit button
const input = document.getElementById("task-input"); // global const for input text field
let taskArray = []; // global array to save all of our tasks
const imgURL =
  "https://vastphotos.com/files/uploads/photos/11763/epic-mountain-mural-wallpaper-photo-l.jpg?v=20240425092148";

// Window listener to automate setup functions
window.onload = function () {
  // set background image
  const body = document.getElementById("body");
  body.style.backgroundImage = `url(${imgURL})`;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "top";
  body.style.backgroundSize = "auto 600px";

  // Run addTask function on all saved tasks (which are stored in an array)
  const savedTasks = JSON.parse(localStorage.getItem("string"));
  if (savedTasks && savedTasks.length > 0) {
    taskArray = savedTasks;
    taskArray.forEach((task) => addTask(task));
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let taskInputText = input.value;
    console.log(taskInputText);
    if (taskInputText !== "") {
      addTask(taskInputText);

      // Update task array
      taskArray.push(taskInputText);
      updateLocalStorage();
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
      label.style.textDecorationColor = "Magenta";
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
    taskArray = taskArray.filter((task) => task !== inputText);
    updateLocalStorage();
  });

  // append task-item, inputText, remove-button
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);

  document.getElementById("task-list").appendChild(li);
}

// Function sets key value pair into local storage
function updateLocalStorage() {
  localStorage.setItem("string", JSON.stringify(taskArray));
}

/*
 Reference Notes:  
        https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        localStorage.setItem(key, value)       
            - localStorage.setItem("myCat", "Tom");
        const cat = localStorage.getItem("myCat");
            - localStorage.getItem(key)
        localStorage.removeItem("myCat");
        localStorage.clear();

        JSON.stringify()  - turns array/objects into strings  /   ["Wash dishes", "Mow yard", "Leet code stuff"] -> '["Wash dishes", "Mow yard", "Leet code stuff"]'
        JSON.parse()      - turns strings into usable arrays  /   '["Wash dishes", "Mow yard", "Leet code stuff"]' -> ["Wash dishes", "Mow yard", "Leet code stuff"]
        
*/
