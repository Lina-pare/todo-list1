document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = "";
});
