import {themes} from '../theme';

function WeatherIcon({data, className}) {

    const iconName = () => {
        if( data.weather[0].icon.includes('n') ) {
            return `wi wi-owm-night-${data.weather[0].id} ${className}`;
        }
        else {
            return `wi wi-owm-day-${data.weather[0].id} ${className}`;
        }        
    }

    const iconColor = () => {
        if( data.weather[0].id === 800 ) {
            return { color: '#ffff2e' }
        } 
        else {
            return themes.getIconColor();
        }
    }

    return (
        <i style={ iconColor() } className={ iconName() }></i> 
    )
}

export default WeatherIcon;