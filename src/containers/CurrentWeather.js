function CurrentWeather({weather}) {

    return (
        <div>
            {weather.weather[0].main}
            {weather.main.temp}º
            Feels like {weather.main.feels_like}
        </div>
    )
}

export default CurrentWeather;