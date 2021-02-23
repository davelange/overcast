import React from 'react';
import {getForecastDate, formatTemp} from '../helpers';
import {themes} from '../theme';
import FeatherIcon from 'feather-icons-react';
import WeatherIcon from '../components/WeatherIcon';
import CardExtraInfo from '../components/CardExtraInfo';

function ForecastCard({i, weather}) {

    const [expand, setExpand] = React.useState(false);
    

    return (
        <div 
            className="fcast-card flex" 
            style={themes.getCardStyle()}
            onClick={ () => setExpand(!expand) }>
            
            <p className="fcast-card__date">{ getForecastDate( i ) }</p>
            
            <div className="fcast-card__main flex">          

                <WeatherIcon 
                    data={weather} 
                    className="fcast-card__image"/>

                <div style={themes.getCardColor()}>
                    <h3 className="fcast-card__maintemp">
                        { formatTemp(weather.main.feels_like) }
                    </h3>
                    {/* <p className="fcast-card__maindesc">
                        {weather.weather[0].main}
                    </p> */}
                </div>
            </div>

            <button className="btn fcast-card__more">
                <FeatherIcon icon="chevron-down" stroke={themes.getIconColor().color}/>
            </button>
            
            <CardExtraInfo
                expand={expand}
                weather={weather} />             
        </div>
    )
}

export default ForecastCard;