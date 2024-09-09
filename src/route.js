const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  if (!inputField.value.trim()) return; // Prevent adding empty tasks

  const paragraph = document.createElement("p"); // Create a new paragraph element
  paragraph.innerText = inputField.value; // Set its content to the input field's value
  toDoContainer.appendChild(paragraph); // Attach paragraph to the todo container
  inputField.value = ""; // Clearing the input field once prompt has been added.

  paragraph.addEventListener("click", function () {
    paragraph.remove("p");
  });
});

const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
