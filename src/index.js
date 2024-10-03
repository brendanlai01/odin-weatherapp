import "./style.css";
import { addContainerListener, cancelListener, submitTaskListener } from "./addTaskListener.js";
import { myTasks, displayTasks, updateDataIndex } from './createTask.js';
import { initProjects, initTasks } from "./storage";
import createDefaultHeader from './createHeader.js';
import addProjectListeners from "./addProjectListener.js";
import { addSidebarTaskListeners } from "./filterTasks";
import { displayProjects, myProjects } from "./createProject";

if(localStorage.getItem("myTasks") === null) initTasks();
if(localStorage.getItem("myProjects") === null) initProjects();
displayTasks(myTasks);
displayProjects(myProjects);
updateDataIndex();


createDefaultHeader();
addProjectListeners();
addSidebarTaskListeners();
addContainerListener();
submitTaskListener();
cancelListener();