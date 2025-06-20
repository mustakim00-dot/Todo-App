const addBtnElm = document.querySelector('.add-btn');
const inputElm = document.querySelector('.task-input');
const searchElm = document.querySelector('.search-input');
const taskListElm = document.querySelector('.task-list');
const editBtnElm = document.querySelector('.edit-btn');
const deleteBtnElm = document.querySelector('.delete-btn');
const CompleteBtnElm = document.querySelector('.Complete-btn');
const undoBtnElm = document.querySelector('.undo-btn');
const messageElm = document.querySelector('.message');
// const updateBtnElm = document.querySelector('.update-btn');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editId = null;
//messageElm.textContent = tasks.length || 'no tasks available';

const addEventListeners = () => {
    addBtnElm.addEventListener('click',addTask);
    inputElm.addEventListener('keydown', inputChanges);
    // updateBtnElm.addEventListener('click', updateTask);
    //inputElm.addEventListener('keypress',addInput);
   searchElm.addEventListener('input',searchTask);
 }

 const inputChanges = (e) => {
    if (e.key === 'Enter'){
        addTask();
    }
    //console.log(e.key);
    
    messageElm.textContent = '';
 }

const addTask = () => {
    const task = inputElm.value;
    //const id = tasks.length + 1;
    const id = Date.now();
    //const id = Crypto.randomUUID();
    if (task === ''){
        messageElm.textContent = 'Please Enter a task';
        //alert('Please enter a task')
        return;
    }else if (editId || editId === 0){
        tasks[editId].task = inputElm.value;
        editId = null;
    }else {
        tasks.push({ id,task,Completed: false});
    }
    //console.log(task);
    
    localStorage.setItem('tasks',JSON.stringify(tasks));
    inputElm.value = '' ;
    renderTasks();
    
 }

const renderTasks = (filteredTasks) => {
    let finalTasks = filteredTasks || tasks;
    taskListElm.innerHTML = '';
    finalTasks.map((task,index) => {
        const taskElm = document.createElement('li');
        taskElm.classList.add('task');
        taskElm.innerHTML = `
        <span class="task-name ${task.Completed ? 'Completed' : '' }" >${index + 1} ${task.task} </span>
        <button class="edit-btn" onclick="editTask(${task.id})" >Edit</button>
                        
        <button class="delete-btn" onclick="deleteTask(${task.id})" >Delete</button>

         ${task.Completed ? `<button class="undo-btn" onclick="undoTask(${task.id})" >Undo</button>` : `<button class="Complete-btn" onclick="completeTask(${task.id})">Complete</button>` }               
        
                        
        `;

        taskListElm.appendChild(taskElm);
    })
    if (editId || editId === 0){
        addBtnElm.textContent = 'Update';
        // editId = null;
        // updateBtnElm.style.display = 'block';
    }else {
        addBtnElm.textContent = 'Add';
       // editId = index;
        // updateBtnElm.style.display = 'none';
    }
    messageElm.textContent = tasks.length === 0 ? 'no tasks available' : "" ;
 }


const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

const completeTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    console.log(index);
    tasks[index].Completed = true;
    
    // tasks = tasks.map((task) => {
    //     if (task.id === id){
    //         task.Completed = true ;
    //     }
    // })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    
}
const undoTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    console.log(index);
    
    tasks[index].Completed = false;
    // editId = index ;
    //console.log(tasks);
    // tasks = tasks.map((task) => {
    //     if (task.id === id){
    //         task.Completed = true ;
    //     }
    // })
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();

}
 const editTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    inputElm.value = tasks[index].task;
    editId = index ;
    renderTasks();
 }


//  const updateTask = () => {
//     if( inputElm.value === '') {
//         messageElm.textContent = 'Please enter a task' ;
//         return;
//     }
//     tasks[editId].task = inputElm.value;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     inputElm.value = ' ';
//     renderTasks();
//  }


const searchTask = () => {
    const search = searchElm.value.toLowerCase();
    let filteredTasks = tasks.filter((task) => task.task.toLowerCase().includes(search));
    if (search === '') {
        //renderTasks(null);
        renderTasks(JSON.parse(localStorage.getItem('tasks')));
    //    filteredTasks = JSON.parse(localStorage.getItem('tasks'));
    }else {
        renderTasks(filteredTasks);
    }
    console.log(JSON.parse(localStorage.getItem('tasks')));
    
}
 

 renderTasks();
 addEventListeners();