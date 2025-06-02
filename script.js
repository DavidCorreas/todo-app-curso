// script.js - Funcionalidad básica para la Todo App
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Por ahora solo una función básica
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Por favor, escribe una tarea');
            return;
        }

        // Crear elemento de tarea
        const li = document.createElement('li');
        li.className = 'task-item';
        li.textContent = taskText;
        
        // Añadir a la lista
        taskList.appendChild(li);
        
        // Limpiar input
        taskInput.value = '';
        taskInput.focus();
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});