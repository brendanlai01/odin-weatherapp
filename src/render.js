import { format } from "date-fns";
import cloudy from "./icons/animated/cloudy.svg";
import rainy from './icons/animated/rainy-1.svg';
import sunny from './icons/animated/clear-day.svg';
import snowy from './icons/animated/snowy-3.svg';
import rainandsnow from './icons/animated/rain-and-snow-mix.svg';
import thunderstorms from './icons/animated/thunderstorms.svg';
import windy from './icons/animated/wind.svg';

export function renderMain(data){
    let location = document.querySelector('#location-name');
    let date = document.querySelector('#date-txt');
    let temperature = document.querySelector('#temperature-txt');
    let forecast = document.querySelector('#forecast-txt');
    let description = document.querySelector('#description-txt');
    let search = document.querySelector('#search-input');

    search.style.borderColor = '#e0e0e0';

    location.textContent = '';
    date.textContent = '';
    temperature.textContent = '';
    forecast.textContent = '';

    determineWeatherIcon(data);

    location.textContent = data.resolvedAddress;
    date.textContent = format(new Date(data.days[1].datetime), "MMMM dd, yyyy");
    temperature.textContent = data.currentConditions.temp + '°F';
    forecast.textContent = data.currentConditions.conditions;
    description.textContent = data.days[0].description;
}

export function renderConditions(data){
    let humidity = document.querySelector('#humidity-txt');
    let windGust = document.querySelector('#gust-txt');
    let windSpeed = document.querySelector('#speed-txt');
    let windDirection = document.querySelector('#direction-txt');

    humidity.textContent = '';
    windGust.textContent = '';
    windSpeed.textContent = '';
    windDirection.textContent = '';

    humidity.textContent = data.currentConditions.humidity;
    windGust.textContent = data.currentConditions.windgust;
    windSpeed.textContent = data.currentConditions.windspeed;
    windDirection.textContent = data.currentConditions.winddir;
}

export function renderForecast(data){
    let forecast = document.querySelector('.forecast-children');
    forecast.innerHTML = '';

    for(let i = 2; i < 9; i++){
        createChild(data, i);
    }
}

export function showError(){
    let search = document.querySelector('#search-input');

    search.style.borderColor = 'red';
    alert('Enter a valid location!')
}

export function loading(){
    let main = document.querySelector('main');
    const loadingDiv = document.createElement('div');

    loadingDiv.class = 'loader';
    main.innerHTML = '<div class="loader center-align"></div>';
}

export function restoreAppSkeleton(){
    let main = document.querySelector('main');

    main.innerHTML = `
        <div class="main-block center-align">
            <div class="main-name center-align">
                <h1 class="no-margin-bot" id="location-name"></h1>
                <h2 class="no-margin-top" id="date-txt"></h2>
            </div>
            <i id="weather-icon">
                <img src="" alt="">
            </i>
            <div class="main-temp center-align">
                <h1 class="no-margin-bot" id="temperature-txt"></h1>
                <h2 class="no-margin-top" id="forecast-txt"></h2>
                <i id="description-txt"></i>
            </div>
        </div>
        <div class="second-block">
            <div class="air">
                <h1>Air Conditions</h1>
                <div class="air-children">
                    <div id="humidity" class="child">
                        <b>Humidity</b>
                        <p id="humidity-txt"></p>
                    </div>
                    <div id="wind-gust" class="child">
                        <b>Wind Gust</b>
                        <p id="gust-txt"></p>
                    </div>
                    <div id="wind-speed" class="child">
                        <b>Wind Speed</b>
                        <p id="speed-txt"></p>
                    </div>
                    <div id="wind-direction" class="child">
                        <b>Wind Direction</b>
                        <p id="direction-txt"></p>
                    </div>
                </div>
            </div>
            <div class="future-forecast">
                <h1>7-Day Forecast</h1>
                <div class="forecast-children">
                </div>
            </div>
        </div>
        `;

}

function createChild(data, index){
    let forecast = document.querySelector('.forecast-children');
    let newDiv = document.createElement('div');
    let date = document.createElement('p');
    let icon = document.createElement('img');
    let temp = document.createElement('p');

    newDiv.classList.add('child', 'center-align');
    date.textContent = format(new Date(data.days[index].datetime), "MMM dd, yyyy");
    icon.src = determineForecastIcon(data, index)
    temp.textContent = data.days[index].temp + '°F';

    newDiv.appendChild(date);
    newDiv.appendChild(icon);
    newDiv.appendChild(temp);
    forecast.appendChild(newDiv);
}

function determineWeatherIcon(data){
    let weatherIcon = document.querySelector('#weather-icon img');
    let condition = data.currentConditions.conditions;

    if(condition.includes('Clear')){
        weatherIcon.src = sunny;
    }else if(condition.includes('Rain') && condition.includes('Snow')){
        weatherIcon.src = rainandsnow;
    }else if(condition.includes('Rain')){
        weatherIcon.src = rainy;
    }else if(condition.includes('Snow')){
        weatherIcon.src = snowy;
    }else if(condition.includes('cloudy')){
        weatherIcon.src = cloudy;
    }else if(condition.includes('thunderstorm')){
        weatherIcon.src = thunderstorms;
    }else if(condition.includes('wind')){
        weatherIcon.src = windy;
    }
}

function determineForecastIcon(data, index){
    let condition = data.days[index].icon;

    if(condition.includes('clear')){
        return sunny;
    }else if(condition.includes('rain')){
        return rainy;
    }else if(condition.includes('snow')){
        return snowy;
    }else if(condition.includes('cloudy')){
        return cloudy;
    }else if(condition.includes('thunderstorm')){
        return thunderstorms;
    }else if(condition.includes('wind')){
        return windy;
    }
}


