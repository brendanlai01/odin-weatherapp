import "./style.css";
import { processData, retrieveData } from "./fetch";

function addListeners(){
    let search = document.querySelector('#search-btn');
    search.addEventListener('click', retrieveData('boston'));
}

addListeners();