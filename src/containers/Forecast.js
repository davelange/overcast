import React from 'react';
import {weather} from '../api/requests';
import ForecastCard from '../components/ForecastCard';

function Forecast({city}) {

    const [forecast, setForecast] = React.useState();

    React.useEffect( () =>  {        
        weather.get('forecast', city).then( res => {
            if( res ) {
                let accept = [0,8,16,24,32];
                let filtered = res.list.filter( (item, i) => accept.includes(i) )
                setForecast(filtered);      
            }   
        })       
    }, [city]);

    return(
        <div className="lg-flex__half">
            { forecast && forecast.map( (item, i) =>           
                <ForecastCard 
                    key={i}
                    i={i}
                    weather={item} />           
            )} 
        </div> 
    )
}   

export default Forecast;