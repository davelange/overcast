import {popCalc, windSpeed} from '../helpers';

function CardExtraInfo({weather, expand}) {

    const cls = () => {
        return expand ? 'collapsable open flex__full' : 'collapsable close flex__full'
    }

    return(
        <div className={cls()}>
            <div className="fcast__extra">
            <div>
                <p className="fcast__label">Humidity</p>
                <p>{weather.main.humidity}%</p>
            </div>                
            <div>
                <p className="fcast__label">Wind</p>
                <p>{windSpeed(weather.wind.speed)}</p>
            </div>          
            <div>
                <p className="fcast__label">Chance of rain</p>
                <p>{popCalc(weather.pop)} </p>
            </div>                            
            </div>     
        </div> 
    )
}

export default CardExtraInfo;