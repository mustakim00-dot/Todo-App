const addBtnElm = document.querySelector('.add-btn');
const inputElm = document.querySelector('.task-input');
const searchElm = document.querySelector('.search-input');
const taskListElm = document.querySelector('.task-list');
const editBtnElm = document.querySelector('.edit-btn');
const deleteBtnElm = document.querySelector('.delete-btn');
const CompleteBtnElm = document.querySelector('.Complete-btn');
const undoBtnElm = document.querySelector('.undo-btn');
const messageElm = document.querySelector('.message');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//messageElm.textContent = tasks.length || 'no tasks available';

const addEventListeners = () => {
    addBtnElm.addEventListener('click',addTask);
    inputElm.addEventListener('input', inputChanges)
    //inputElm.addEventListener('keypress',addInput);
   // searchElm.addEventListener('input',searchTask);
 }
 const inputChanges = () => {
    messageElm.textContent = '';
 }

const addTask = () => {
    const task = inputElm.value
    const id = tasks.length + 1;
    if (task === ''){
        messageElm.textContent = 'Please Enter a task';
        //alert('Please enter a task')
        return;
    }
    //console.log(task);
    tasks.push({ id,task,Completed: false});
    localStorage.setItem('tasks',JSON.stringify(tasks));
    renderTasks();
    inputElm.value = '' ;
 }

const renderTasks = () => {
    taskListElm.innerHTML = '';
    tasks.map((task, index) => {
        const taskElm = document.createElement('li');
        taskElm.classList.add('task');
        taskElm.innerHTML = `
        <span> ${task.task} </span>
        <button class="edit-btn" onclick="editTask(${index})" >Edit</button>
                        
        <button class="delete-btn" onclick="deleteTask(${index})" >Delete</button>
                        
        <button class="Complete-btn" onclick="completeTask(${index})">Complete</button>
                        
        <button class="undo-btn" onclick="undoTask(${index})" >Undo</button>`;

        taskListElm.appendChild(taskElm);
    })
    messageElm.textContent = tasks.length === 0 ? 'no tasks available' : "" ;
 }
 renderTasks();
 addEventListeners();