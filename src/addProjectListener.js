import { createProject } from "./createProject";
import { filterProjTasks } from "./filterProjectTasks";
import { addDataIndex } from "./createProject";

export default function addProjectListeners(){
    const addProjectToList = document.querySelector('#add-project');
    let projectDialog = document.querySelector('.project-dialog');
    let projectForm = document.querySelector('.project-form');
    let userProject = document.querySelector('#create-project');
    const submitProject = document.querySelector('#submit-project');
    const cancelProject = document.querySelector('#cancel-project');    

    updateHeaderListeners();
    
    addProjectToList.addEventListener('click', ()=>{
        projectDialog.showModal();
    });
    
    submitProject.addEventListener('click', (event)=>{
        event.preventDefault();
        if(userProject.value !== ''){
            createProject(userProject.value);
            addDataIndex();
            projectForm.reset();
            projectDialog.close();
        }else{
            projectForm.reset();
            return;
        }
    })
    
    cancelProject.addEventListener('click', ()=>{
        projectDialog.close();
    });
}

function updateHeaderListeners(){
    let projectsList = document.querySelectorAll('.projects-list li span');
    let header = document.querySelector('.header h1');

    projectsList.forEach((li)=>{
        li.addEventListener('click', ()=>{
            header.textContent = `${li.textContent}`;
            filterProjTasks(li.textContent);
        })
    })
}

export { addProjectListeners, updateHeaderListeners };