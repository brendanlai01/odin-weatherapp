import { myTasks, displayTasks } from "./createTask";
import { resetDisplay } from "./filterProjectTasks";
import { createTaskNode } from "./createTask";
import { isFuture, isToday, startOfToday } from "date-fns";

function addSidebarTaskListeners(){
    let allTasks = document.querySelector('#tasks');
    let todayTasks = document.querySelector('#today');
    let upcomingTasks = document.querySelector('#upcoming');
    let completedTasks = document.querySelector('#completed');
    let header = document.querySelector('.header h1');
    
    todayTasks.addEventListener('click', ()=>{
        header.textContent = 'Today';
        let today = startOfToday();
        filterToday(today);
    })
    
    upcomingTasks.addEventListener('click', ()=>{
        header.textContent = 'Upcoming';
        filterUpcoming();
    })
    
    completedTasks.addEventListener('click', ()=>{
        header.textContent = 'Completed';
        filterComplete();
    })
    
    allTasks.addEventListener('click', ()=>{
        header.textContent = 'Tasks';
        showAll();
    })
}

function filterToday(date){
    let filteredArr = myTasks.filter((task)=> isToday(task.date) === isToday(date));

    resetDisplay();
    console.log(filteredArr);
    displayTasks(filteredArr);
}

function filterUpcoming(){
    let filteredArr = myTasks.filter((task)=> isFuture(task.date));

    resetDisplay();
    console.log(filteredArr);
    displayTasks(filteredArr);
}

function filterComplete(){
    let filteredArr = myTasks.filter((task)=> task.completion === 'Done');

    resetDisplay();
    console.log(filteredArr);
    displayTasks(filteredArr);
}

function showAll(){
    resetDisplay();
    console.log(myTasks);
    displayTasks(myTasks);
}

export { addSidebarTaskListeners, showAll };