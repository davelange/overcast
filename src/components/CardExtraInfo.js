import {timeCalc, windSpeed} from '../helpers';

function CardExtraInfo({weather, expand}) {

    const cls = () => {
        return expand ? 'collapsable open flex__full' : 'collapsable close flex__full'
    }

    return(
        <div className={cls()}>
            <div className="fcast__extra">
            <div>
                <p className="fcast__label">Humidity</p>
                <p>{weather.humidity}%</p>
            </div>                
            <div>
                <p className="fcast__label">Wind</p>
                <p>{windSpeed(weather.speed)}</p>
            </div>          
            <div>
                <p className="fcast__label">Sunrise</p>
                <p>{timeCalc(weather.sunrise)} </p>
            </div>                
            <div>
                <p className="fcast__label">Sunset</p>
                <p>{timeCalc(weather.sunset)} </p>
            </div>           
            </div>     
        </div> 
    )
}

export default CardExtraInfo;