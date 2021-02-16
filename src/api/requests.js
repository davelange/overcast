import { KEY } from './apiKey.js';

async function geoLocate() {
    const URL = 'http://ip-api.com/json';
    let req = await fetch(URL);
    return await req.json();    
}

async function getForecast(city) {
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${KEY}&q=${city}&cnt=5&units=metric`;
    let req = await fetch(URL);    
    return validateResponse( await req );
}

async function getCurrentWeather(city) {
     const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${KEY}&q=${city}&units=metric`;
    let req = await fetch(URL);
    return validateResponse( await req );    
}

function validateResponse(data) {    
    if( data.status !== 200 ) {
        return false;
    }
    else return data.json();
}

export {
    geoLocate,
    getCurrentWeather,
    getForecast
}