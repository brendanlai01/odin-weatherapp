export function fetchData(location){
    return new Promise((resolve, reject) =>{
      fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=PBCAQN2E5DGNC4CEYYD2KR2V8&contentType=json`, {
        "method": "GET",
        "headers": {
        },
        "mode": 'cors'
        })
      .then((response)=>{
          return response.json();
      })
      .then((data) => {
        resolve(data);
        console.log(data);
        console.log(data.description);
      })
      .catch((err) => {
        reject(`Error: Data fetch failed - ${err.message}`);
        console.error(err);
      });
    })
}

export async function processData(location){
  try {
    
  } catch (error) {
    
  }
}