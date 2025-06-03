document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentFilter = 'all';

    function updateTaskCounter() {
        const currentTaskCount = taskList.getElementsByTagName('li').length;
        document.title = `Todo App (${currentTaskCount} tareas)`;
    }
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '' || taskText.length < 3) {
            alert('La tarea debe tener al menos 3 caracteres');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task-item';
        
        // Create checkbox for task completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.onclick = function() {
            li.classList.toggle('completed', checkbox.checked);
            updateTasksVisibility();
        };
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            li.remove();
            updateTaskCounter();
            updateTasksVisibility();
        };
        
        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        
        updateTaskCounter();
        updateTasksVisibility();
        
        taskInput.value = '';
        taskInput.focus();
    }

    function updateTasksVisibility() {
        const tasks = taskList.getElementsByTagName('li');
        Array.from(tasks).forEach(task => {
            const isCompleted = task.classList.contains('completed');
            const checkbox = task.querySelector('.task-checkbox');
            
            // Ensure checkbox state matches completed class
            if (checkbox) {
                checkbox.checked = isCompleted;
            }
            
            if (currentFilter === 'all') {
                task.style.display = 'flex';
            } else if (currentFilter === 'active' && !isCompleted) {
                task.style.display = 'flex';
            } else if (currentFilter === 'completed' && isCompleted) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    }

    function handleFilterClick(event) {
        const filter = event.target.dataset.filter;
        currentFilter = filter;
        
        // Update active filter button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        updateTasksVisibility();
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Add filter button event listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });

    // Initialize
    updateTaskCounter();
    updateTasksVisibility();
});