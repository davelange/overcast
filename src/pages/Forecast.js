import React from 'react';
import {useHistory} from 'react-router-dom';
import {getCurrentWeather, getForecast} from '../api/requests';
import CurrentWeather from '../containers/CurrentWeather';
import NextDays from '../containers/NextDays';

function Forecast({location, setLocation}) {

    let history = useHistory();

    const [forecast, setForecast] = React.useState();

    const [current, setCurrent] = React.useState();

    React.useEffect( () => {         
        
        history.push(`/${encodeURIComponent( location.city.toLowerCase() )}`);        
        
        getCurrentWeather( location.city ).then( res => {
            setCurrent(res);
            setLocation({ city: res.name, country: res.sys.country })
        });
        
        getForecast( location.city ).then( res => setForecast(res) );                  

    }, [location.city]);


    return (
        <div className="forecast-page">

            { current && 
                <CurrentWeather 
                    weather={current} /> 
            }
            
             { forecast &&
                <NextDays 
                    forecast={forecast.list}/>
            }

        </div>
    )
}

export default Forecast;