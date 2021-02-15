import WeatherIcon from '../components/WeatherIcon';
import {formatTemp, getLocalTime} from '../helpers';

function CurrentWeather({weather}) {

    return (
        <div className="current flex">
            <div className="flex__full">
                <p className="current__time">{ getLocalTime(weather) }</p>
            </div>            
            <div className="flex__full flex current__display">
                <WeatherIcon 
                    data={weather} 
                    className="current__image" />                    
                <h2 className="current__temp">{formatTemp(weather.main.temp)}</h2>
            </div>
            <div className="flex__full flex">                
                <p className="current__desc flex__full">{weather.weather[0].main}</p>
                <p className="current__feels flex__full">Feels like {formatTemp(weather.main.feels_like)}</p>
            </div>                        
        </div>
    )
}

export default CurrentWeather;