import "./style.css";
import { fetchData } from "./fetch";
import { loading } from "./render";

function addListeners(){
    let searchBtn = document.querySelector("#search-btn");
    let input = document.querySelector("#search-input");
    searchBtn.addEventListener('click', () => {
        fetchData(input.value)
        input.value = '';
    });
}

fetchData('Los Angeles');
addListeners();