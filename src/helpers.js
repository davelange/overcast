function formatTemp(n) {
    return `${Math.round(n)}°`; 
}

function windSpeed(n)  {
    return `${Math.round(n * 0.001 * 60 * 60)} km/h`;
}

function popCalc(n) {
    return `${n*100}%`;
}

export {    
    formatTemp,
    windSpeed,     
    popCalc
}