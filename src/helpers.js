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

export {
    formatTemp,
    windSpeed,
    timeCalc
}