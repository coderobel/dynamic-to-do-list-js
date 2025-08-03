document.addEventListener('DOMContentLoaded', function () {
    addButton = document.getElementById("add-task-btn");
    taskInput = "task-input";
    taskList = "task-list";
    function addTask() {
        taskText = taskInput.value.trim();
        if(taskText == ""){
            alert("Enter a Task.")
        }
    };
});
