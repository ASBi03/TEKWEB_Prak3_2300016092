const bgColorBtn = document.getElementById("bgColors");
const colors =  ['#add8e6', '#ffb6c1', '#90ee90', '#ffff00', '#ffffff'];
let currentColor = 0;

bgColorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
});

const fontStyleBtn = document.getElementById("fontStyle");
const styles = ['Serif', 'Verdana', 'Sans-Serif']
let currentStyle = 0;

fontStyleBtn.addEventListener("click", function() {
    document.body.style.fontFamily = styles[currentStyle];
    currentStyle = (currentStyle + 1) % styles.length;
});

const fontSlider = document.getElementById("fontSize");
const fontSizeValue = document.getElementById("fontSizeValue");
const text = document.querySelector("p");

fontSlider.addEventListener("input", function() {
    const fontSize = fontSlider.value + "px";
    text.style.fontSize = fontSize;  // Penulisan yang benar: fontSize
    fontSizeValue.textContent = fontSize;
});

const toggleDarkMode = document.getElementById("darkMode");
toggleDarkMode.addEventListener("click", function() {
    document.body.classList.toggle("darkMode");
});

const taskInput = document.getElementById("newTask");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasklist = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteBtn">X</button>
    `;
    tasklist.appendChild(li);
    taskInput.value = "";

    li.querySelector(".deleteBtn").addEventListener("click", function() {
        deleteTask(li);
    });

    li.addEventListener("dblclick", function() {
        editTask(li);
    });

    li.addEventListener("click", function() {
        toggleCompleteTask(li);
    });
}

function toggleCompleteTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(element) {
    tasklist.removeChild(element);
}

function editTask(element) {
    const taskText = element.querySelector("span").innerText;
    const newText = prompt("Edit task: ", taskText);
    if (newText !== null && newText.trim() !== "") {
        element.querySelector("span").innerText = newText;
    }
}