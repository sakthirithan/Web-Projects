const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/* Add new task */
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
    return;
  }

  // Create LI
  let li = document.createElement("li");
  li.className = "list";
  li.textContent = inputBox.value;

  // Create delete button
  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; // ×
  span.className = "del";

  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}

/* Toggle check & delete */
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

/* Save to localStorage */
function saveData() {
  localStorage.setItem("todo-data", listContainer.innerHTML);
}

/* Load saved tasks */
function showTask() {
  listContainer.innerHTML = localStorage.getItem("todo-data") || "";
}

showTask();
