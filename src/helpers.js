function formatTemp(n) {
    return `${Math.round(n)}°`; 
}

function windSpeed(n)  {
    return `${Math.round(n * 0.001 * 60 * 60)} km/h`;
}

function timeCalc(n) {
    const d = new Date(n*1000);
    const mins = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `${d.getHours()}h${mins}`
}

function getForecastDate(i) {
    const offset = i+1;
    const d = new Date();
    d.setDate( d.getDate()+offset );
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${weekdays[ d.getDay() ]}, ${ d.getDate() }`;
}

function getLocalTime(data) {    
    const d = tmzOffset( Date.now(), data.timezone );
    const mins = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return `${d.getHours()}:${mins}`;
}

function tmzOffset(dt, offset) {
    const d = new Date(dt);
    d.setHours( d.getHours() + (offset/60/60) );
    return d;
}

function isDayTime(data) {
    const curr = tmzOffset( Date.now(), data.timezone);
    const sunrise = tmzOffset(data.sys.sunrise*1000, data.timezone);
    const sunset = tmzOffset(data.sys.sunset*1000, data.timezone);    
    return curr.getHours() > sunrise.getHours() && curr.getHours() < sunset.getHours();
}

function popCalc(n) {
    return `${n*100}%`;
}

export {
    formatTemp,
    windSpeed,
    timeCalc,
    getForecastDate,
    getLocalTime,
    isDayTime,
    popCalc
}