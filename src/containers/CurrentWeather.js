import {formatTemp} from '../helpers.js';

function CurrentWeather({weather}) {

    return (
        <div className="current flex">
            
            <div className="flex__full flex">
                <div className="current__image flex__half">
                    <i className={`wi wi-owm-${weather.weather[0].id}`}></i>
                </div>
                <div className="flex__half">
                    <h2 className="current__temp">{formatTemp(weather.main.temp)}</h2>
                </div>                
            </div>
            <div className="flex__full flex">                
                <p className="current__desc flex__half">{weather.weather[0].main}</p>
                <p className="current__feels flex__half">Feels like {formatTemp(weather.main.feels_like)}</p>
            </div>
            
            
        </div>
    )
}

export default CurrentWeather;