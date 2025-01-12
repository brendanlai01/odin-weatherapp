import { loading, renderConditions, renderForecast, renderMain, restoreAppSkeleton } from "./render";

export async function fetchData(location){
    return new Promise((resolve, reject) =>{
      fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=PBCAQN2E5DGNC4CEYYD2KR2V8&contentType=json`, {
        "method": "GET",
        "headers": {
        },
        "mode": 'cors'
        })
      .then((response)=>{
          loading();
          return response.json();
      })
      .then((data) => {
        restoreAppSkeleton();
        renderConditions(data);
        renderMain(data);
        renderForecast(data);
        resolve(data);
        console.log(data);
        console.log(data.description);
        console.log(data.humidity);
      })
      .catch((err) => {
        reject(`Error: Data fetch failed - ${err.message}`);
        console.error(err);
      });
    })
}
