import React from 'react';
import { useParams } from 'react-router-dom';
import {weather} from '../api/requests';
import {location} from '../location';
import ForecastCard from '../components/ForecastCard';

function Forecast() {

    const [forecast, setForecast] = React.useState();

    let {city} = useParams();

    
    React.useEffect( () =>  {        
        weather.get('forecast', location.toName(city)).then( res => {
            if( res ) {                
                setForecast( sortForecastToDates(res.list) );      
            }   
            else {
                setForecast(null);      
            }
        })       
    }, [city]);

    function sortForecastToDates( list ) {
        let byDates = {};
        list.forEach( (item, i) => {            
            let key = item.dt_txt.split(' ')[0] ;            
            if( !(key in byDates) ) {
                byDates[key] = [];
            }
            byDates[key].push(item);            
        });
        return Object.values(byDates).slice(1, 10);
    }

    return(
        <div className="fcast lg-flex__half">
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