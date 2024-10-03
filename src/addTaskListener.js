import { takeUserInput } from './createTask.js';


function addContainerListener(){
    let addContainer = document.querySelector('.add-container');
    let addForm = document.querySelector('.form-box');

    addContainer.addEventListener('click', ()=>{
        addContainer.classList.add('hidden');
        addForm.classList.remove('hidden');
    });
}

function submitTaskListener(){
    let submitTask = document.querySelector('#add-button');
    let form = document.querySelector('form');

    submitTask.addEventListener('click', function(event){
        event.preventDefault();
        takeUserInput();
        form.reset();
    })
}

function cancelListener(){
    let cancel = document.querySelector('#cancel-button');
    let addForm = document.querySelector('.form-box');
    let addContainer = document.querySelector('.add-container');
    let form = document.querySelector('.add-form');

    cancel.addEventListener("click", () => {
        addForm.classList.add('hidden');
        addContainer.classList.remove('hidden');
        form.reset();
    });
}

export { addContainerListener, submitTaskListener, cancelListener };