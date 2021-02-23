import React from 'react';
import { useParams } from 'react-router-dom';
import {weather} from '../api/requests';
import {themes} from '../theme';
import {location} from '../location';
import {formatTemp, getLocalTime} from '../helpers';
import WeatherIcon from '../components/WeatherIcon';
import Time from '../components/Time';

function CurrentWeather() {

    const [current, setCurrent] = React.useState();    

    let {city} = useParams();    

    React.useEffect( () => {        
        weather.get('current', city).then( res => {
            if( res ) {
                themes.setPhase(res);       
                location.set({
                    city: res.name,
                    country: res.sys.country
                })                
                setCurrent(res);                      
            }   
            else {                
                setCurrent(null);    
            }
        })       
    }, [city]);

    return (
        <div className="current flex">
            { current ? (
                <> 
                <Time 
                    time={getLocalTime(current)} />

                <div className="flex__full flex current__display">
                    <WeatherIcon 
                        data={current} 
                        className="current__image" />                    
                    <h2 className="current__temp">{formatTemp(current.main.temp)}</h2>
                </div>
                <p className="current__desc">{current.weather[0].main}. Feels like {formatTemp(current.main.feels_like)}.</p>
                </>
            ) : (
                <>
                <div className="flex__full flex">                                    
                    <p className="current__not-found flex__full">We couldn't find what you were looking for!</p>
                </div>                        
                </>
            )}            
        </div>
    )
}

export default CurrentWeather;