document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskValue = taskInput.value.trim();
      if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
      }
    });
  
    function addTask(task) {
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed', checkbox.checked);
      });
  
      const taskText = document.createElement('span');
      taskText.textContent = task;
  
      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      taskList.appendChild(listItem);
    }
  });
  