import React from 'react';
import {themes} from '../theme';

function Background() {    

    const [style, setStyle] = React.useState( themes.getAppTheme() );

    themes.addSub( () => setStyle( themes.getAppTheme() ) );    
    
    return (
        <div className="bg">
            <div className="bg__image"></div> 
            <div className="bg__gradient" style={ style }></div>            
        </div>
    )
}

export default Background;