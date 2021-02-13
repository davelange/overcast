import React from 'react';
import {formatTemp, timeCalc, windSpeed} from '../helpers.js';
import AnimatedNumber from "animated-number-react";
import DateList from '../components/DateList';

function NextDays({forecast}) {
    
    const [day, setDay] = React.useState(0);

    function next() {        
        let newDay = day < forecast.length-1 ? day+1 : 0;
        setDay( newDay );
    }    

    function current() {
        return forecast[day];
    }

    function getTempColor() {
        let t = current().feels_like.day;
        let s = {
            background: '#000',
            color: '#fff'
        }
        if( t < 5 ) {
            s.background = '#fff';
            s.color = '#333';
        }
        else if( t < 10 ) {
            s.background = '#2359E3';
        }
        else if( t < 20 ) {
            s.background = '#5988FF';
        }
        else if( t < 25 ) {
            s.background = '#83A3F5';
        }
        else if( t < 30 ) {
            s.background = '#F3E34D';
        }
        else if( t < 40 ) {
            s.background = '#F99336';
        }
        else if( t >= 40 ) {
            s.background = '#FF3A1F';
        }
        return s;
    }

    return(
        <div className="fcast flex" style={getTempColor()}>            
            
            <DateList 
                current={day}
                days={forecast} 
                setDay={setDay} />
            
            <div className="flex__full fcast__main flex">
                <div className="fcast__image">
                    <i className={`wi wi-owm-${current().weather[0].id}`}></i>
                </div>
                <div>                    
                    <h3 className="fcast__maintemp">{ formatTemp(current().feels_like.day) }</h3>
                    <p className="fcast__maindesc">{current().weather[0].main}</p>
                </div>  
            </div>
                    

            <div className="fcast__extra flex__full flex ">
                <div className="">
                    <p className="fcast__label">Humidity</p>
                    <p>{current().humidity}%</p>
                </div>                
                <div className="">
                    <p className="fcast__label">Wind</p>
                    <p>{windSpeed(current().speed)}</p>
                </div>          
                <div className="">
                    <p className="fcast__label">Sunrise</p>
                    <p>{timeCalc(current().sunrise)} </p>
                </div>                
                <div className="">
                    <p className="fcast__label">Sunset</p>
                    <p>{timeCalc(current().sunset)} </p>
                </div>                


            </div> 


        </div>
    )
}

export default NextDays;