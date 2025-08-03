document.addEventListener('DOMContentLoaded', function () {
    addButton = document.getElementById("add-task-btn");
    taskInput = document.getElementById("task-input");
    taskList = document.getElementById("task-list");
    function addTask() {
        taskText = taskInput.value.trim();
        if(taskText == ""){
            alert("Enter a Task.")
        }
    };
});
