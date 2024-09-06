let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p"); // Create a new paragraph element
  paragraph.innerText = inputField.value; // Set its content to the input field's value
  toDoContainer.appendChild(paragraph); // Attach paragraph to the todo container
  inputField.value = ""; // Clearing the input field once prompt has been added.

  paragraph.addEventListener("click", function () {
    paragraph.remove("p");
  });
});
