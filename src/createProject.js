import  { updateHeader, updateHeaderListeners }  from './addProjectListener.js';
import { myTasks, setMyTasks } from './createTask.js';
import { getProjects } from './storage.js';
import { showAll } from './filterTasks.js';

const expand = document.querySelector('#expand');
let projectsList = document.querySelectorAll('.projects-list li');

function dropdown(){
    projectsList.forEach((li)=>{
        if(isDisplayed(li)){
            li.style.display = 'none';
        }else{
            li.style.display = 'flex';
        }
    });
}

expand.addEventListener('click', dropdown);

////

let myProjects = getProjects();

function isDisplayNone(element) {
    return window.getComputedStyle(element).display === "none";
}

function isDisplayed(element){
    return window.getComputedStyle(element).display !== 'none';
}

function addProjectInput(name){
    let projSelect = document.querySelector('#project-select');
    let newProj = document.createElement('option');
    
    newProj.value = `${name}`;
    newProj.textContent = `${name}`;
    projSelect.appendChild(newProj);
}

function createProject(projectName){
    //save project to myProjects
    let newProject = projectName;
    myProjects.push(newProject);
    
    overwriteMyProjects();
    let i = myProjects.indexOf(newProject);
    let projLi = createProjectLi(projectName);
    projLi.dataset.index = i;
    return projLi;
}

function createProjectLi(text){
    let firstChild = document.querySelector('.projects-list li');

    let newProjectLi = document.createElement('li');
    let newProjSpan = document.createElement('span');
    let trashIcon = document.createElement('button');
    trashIcon.classList.add('delete-project', 'white');

    newProjSpan.textContent = `${text}`;
    trashIcon.addEventListener('click', ()=>{
        let index = newProjectLi.dataset.index;
        newProjectLi.remove();
        myProjects.splice(index, 1);
        addDataIndex();
        overwriteMyProjects();
        console.log(myProjects);
        deleteProject(text);
    })
    newProjectLi.append(newProjSpan, trashIcon);
    newProjectLi.style.display = 'flex';

    let list = document.querySelector('.projects-list');
    list.appendChild(newProjectLi);

    projectsList = document.querySelectorAll('.projects-list li');
    addProjectInput(newProjectLi.textContent);

    if(isDisplayNone(firstChild)){
        newProjectLi.style.display = 'none'
    }
    
    updateHeaderListeners();
    expand.removeEventListener('click', dropdown);
    expand.addEventListener('click', dropdown);

    return newProjectLi;
}

function deleteProject(project){
    let header = document.querySelector('.header h1');
    let projectSelect = document.querySelectorAll('#project-select option');
    let newMyTasks = myTasks.filter((task)=> task.project !== project);
    setMyTasks(newMyTasks);
    localStorage.setItem('myTasks', JSON.stringify(myTasks));

    header.textContent = 'Tasks';
    showAll();
    projectSelect.forEach((item)=>{
        if(item.value === project){
            item.remove();
        }
    })
}

function displayProjects(projects){
    projects.forEach((project) => {
        let i = myProjects.indexOf(projects);
        let projectLi = createProjectLi(project);
        projectLi.dataset.index = i;
    });
}

function addDataIndex(){
    let list = document.querySelectorAll('.projects-list li');
    for(let i = 0; i < myProjects.length; i++){
        if(list[i].textContent === 'Inbox') continue;
        list[i].dataset.index = i;
    }
}

function overwriteMyProjects(){
    return localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

export { createProject, displayProjects, myProjects, addDataIndex };