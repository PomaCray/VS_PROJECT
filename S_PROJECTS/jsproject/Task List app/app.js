// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getTasks)
    //add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //clear task
    clearBtn.addEventListener('click',  clearTask);
    filter.addEventListener('keyup', filterTasks)
}

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        const li = document.createElement('li');

        //add class
        li.className = 'collection-item';
        //Create text node and append to li
        li.appendChild(document.createTextNode(task));
        //Create new link element
        const link = document.createElement('a');
        // add name
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
    })
}


// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
      
    }
    //Create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    // add name
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // store in LS
    storeTaskInLocalStorage(taskInput.value);


    // clear input
    taskInput.value='';

    console.log(li);

    e.preventDefault();
}

function  storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));



}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){ 
        if(confirm('Are you Sure')){
            e.target.parentElement.parentElement.remove();
        }
     
    }
    removeTaskFromLocalStorage( e.target.parentElement.parentElement);
    
}

function  removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function clearTask(){
    // taskList.innerHTML='';

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    clearTaskFromLocalStorage();
}

function  clearTaskFromLocalStorage(){
    localStorage.clear();
};




function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display='block';
        } else{
            task.style.display='none';
        }
    });
}