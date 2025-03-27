// Get elements from the DOM
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event listener for "Add Task" button
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  addTask(taskText);
  taskInput.value = ''; // clear input after adding
});

// Function to create a new task item
function addTask(taskText) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('task-btns');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);
}
