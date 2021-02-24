import React from 'react';
import {formatTemp} from '../helpers';
import {themes} from '../theme';
import {time} from '../time';
import FeatherIcon from 'feather-icons-react';
import WeatherIcon from '../components/WeatherIcon';
import CardExtraInfo from '../components/CardExtraInfo';
import WeatherGraph from './WeatherGraph';
import Expandable from './Expandable';

function ForecastCard({i, weather}) {

    const [expand, setExpand] = React.useState(false);
    
    const main = () => {
        let midday = weather.filter( item => item.dt_txt.includes('12:00:00'));
        if( midday.length ) {
            return midday[0];
        }
        else {
            return weather.filter( item => item.dt_txt.includes('09:00:00'))[0];        
        }        
    }    
    
    return (
        <div className="fcast-card" 
             style={themes.getCardStyle()}
             onClick={ () => setExpand(!expand) }>
            
           <p className="fcast-card__date">
               { time.getForecastDate( i ) }
            </p>
            
            <div className="fcast-card__main flex">          
                <WeatherIcon 
                    data={main()} 
                    className="fcast-card__image"/>

                <div style={themes.getCardColor()}>
                    <h3 className="fcast-card__maintemp">
                        { formatTemp(main().main.feels_like) }
                    </h3>                    
                </div>
            </div> 

            { !expand && 
                <button className="btn fcast-card__more">
                    <FeatherIcon 
                        icon="chevron-down" 
                        stroke={themes.getIconColor().color}/>
                </button> }            

            <Expandable
                expand={expand}>
                
                <WeatherGraph
                    i={i}
                    data={weather} /> 

                <CardExtraInfo
                    expand={expand}
                    weather={weather[0]} />
            </Expandable>        
                        
        </div>
    )
}

export default ForecastCard;