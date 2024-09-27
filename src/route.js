const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");
const toggleButton = document.getElementById("theme-toggle");
const tagSelect = document.getElementById("tagSelect");
const leftSideBar = document.getElementById("leftSideBar");

function addToDo() {
  const taskText = inputField.value.trim();

  if (!taskText) return;

  const toDoItem = document.createElement("p");
  toDoItem.innerText = taskText;
  toDoItem.classList.add("text-black", "dark:text-white");

  toDoContainer.appendChild(toDoItem);

  inputField.value = "";

  toDoItem.addEventListener("click", function () {
    toDoItem.remove("item");
  });
}

const selectedTag = tagSelect.value;
if (selectedTag) {
  const tagElement = document.createElement("span");
  tagElement.innerText = selectedTag;
  tagElement.classList.add("ml-2", "text-sm", "text-blue-500");
  paragraph.appendChild(tagElement);

  toDoContainer.appendChild(paragraph);

  inputField.value = "";
  tagSelect.selcetedIndex = 0;
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
