document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function updateTaskCounter() {
        const currentTaskCount = taskList.getElementsByTagName('li').length;
        document.title = `Todo App (${currentTaskCount} tareas)`;
    }
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') { // Validación original
            alert('Por favor, escribe una tarea');
            return;
        }
        
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            li.remove();
            updateTaskCounter(); // Actualizar contador al eliminar
        };
        
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        updateTaskCounter(); // Actualizar contador al añadir
        
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    // Inicializar contador al cargar
    updateTaskCounter();
});