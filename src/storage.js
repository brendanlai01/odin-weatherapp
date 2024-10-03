export function initTasks(){
    let myTasks = [];
    localStorage.setItem('myTasks', JSON.stringify(myTasks) || "[]");
}

export function initProjects(){
    let myProjects = [];
    localStorage.setItem('myProjects', JSON.stringify(myProjects) || "[]");
}

export function getTasks(){
    return JSON.parse(localStorage.getItem('myTasks') || "[]");
}

export function getProjects(){
    return JSON.parse(localStorage.getItem('myProjects') || "[]");
}