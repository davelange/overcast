import React from 'react';
import {themes} from '../theme';
import {Graph} from '../graph';
import {time} from '../time';

function WeatherGraph({i, data}) {    

    React.useEffect( () => init() );

    function init() {
        const tempGraph = new Graph({
            el: document.querySelector(`.graph__svg_${i}`),
            stroke: themes.getGraphColor(),
            data: data,        
        })         
        console.log(tempGraph)
        tempGraph.draw();    
    }        

    return(
        <div className={`graph`}>
            
            <svg className={`graph__svg graph__svg_${i}`} preserveAspectRatio="none"></svg>
            
            <div className="graph__times">
                { data.map( (item, i) => (
                    <div className="graph__times-bar" key={i}>                        
                        <p className="">{ Math.round(item.main.feels_like) }°C </p>
                        <p className="">{ time.getDate(item.dt, 'h') } </p>
                    </div>
                    ) 
                )}
            </div>
        </div>
    )
}

export default WeatherGraph;