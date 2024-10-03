import { displayTasks } from "./createTask.js";
import { myTasks } from "./createTask.js";

function filterProjTasks(project){
    let filteredArr = myTasks.filter((task)=> task.project.toUpperCase() === project.toUpperCase());
    resetDisplay();
    console.log(filteredArr);
    displayTasks(filteredArr);
}

function resetDisplay(){
    let taskList = document.querySelectorAll('.task-container');
    taskList.forEach((task)=>{
        task.remove();
    })
}

export { filterProjTasks, resetDisplay };