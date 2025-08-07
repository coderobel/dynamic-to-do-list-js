document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    function getTasksFromStorage() {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    }
    function saveTasksToStorage (tasks){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function addTask() {
        const taskText = taskInput.value.trim();
        if(taskText == ""){
            alert("Enter a Task.")
        }
        const task = document.createElement('li');
        task.textContent = taskText;
        const btn = document.createElement('button');
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        btn.onclick = function () {
            taskList.removeChild(task);
        }

        task.appendChild(btn);
        taskList.appendChild(task);
        taskInput.value = "";

        const tasks = getTasksFromStorage();
        tasks.push(taskText); // Add new task to array
        saveTasksToStorage(tasks); // Save back to storage
    };
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress',function (event) {
    if (event.key === "Enter") {
        addTask();
    }
  });
});
