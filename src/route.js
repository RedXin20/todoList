const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
const toggleButton = document.getElementById("theme-toggle");

function addToDo() {
  if (!inputField.value.trim()) return; // Prevent adding empty tasks

  const paragraph = document.createElement("p"); // Create a new paragraph element
  paragraph.innerText = inputField.value; // Set its content to the input field's value
  paragraph.classList.add("text-black", "dark:text-white");
  toDoContainer.appendChild(paragraph); // Attach paragraph to the todo container
  inputField.value = ""; // Clearing the input field once prompt has been added.}

  paragraph.addEventListener("click", function () {
    paragraph.remove("p");
  });
}

addToDoButton.addEventListener("click", addToDo);

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addToDo();
  }
});

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
