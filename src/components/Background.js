import React from 'react';
import {themes} from '../theme';

function Background() {        

    themes.subscribe( style => {                               
        let gradient = document.querySelector('.bg__gradient');
        gradient.style.background = style.background;
        gradient.style.opacity = style.opacity;        
    });     
    
    return (
        <div className="bg">
            <div className="bg__image"></div> 
            <div className="bg__gradient"></div>            
        </div>
    )
}

export default Background;