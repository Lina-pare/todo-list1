document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTaskToList(taskText);
    taskInput.value = "";
});

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
}

function addTaskToList(taskText) {
    let li = document.createElement('li');
    li.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        li.remove();
        removeTaskFromStorage(taskText);
    });

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
}

function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
