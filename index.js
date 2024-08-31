document.getElementById('addBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    addTask(taskText);
    taskInput.value = '';
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'editBtn';
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);

    editBtn.addEventListener('click', function() {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            li.firstChild.textContent = newTaskText.trim();
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}