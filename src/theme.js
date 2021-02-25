import {Publisher} from './publisher';
import {time} from './time';

const Theme = function() {

    Publisher.call(this);

    this.schemes = {        
        day: {
            bgColor: '#5988FF',
            bgOpacity: .6,
            cardBg: 'rgba(255, 255, 255, 0.3)',
            color: '#333', 
            accent: '#284ba5',            
        },
        night: {
            bgColor: '#040b1d',
            bgOpacity: .8,
            cardBg: '#ffffff22',               
            color: '#fff', 
            accent: '#ffff2e',                               
        },
    }
    
    this.phase = '';

    this.theme = function(k) {
        return this.phase ? this.schemes[this.phase][k] : '';
    }

    this.setPhase = function( data ) {        
        this.phase = time.isDayTime(data) ? 'day' : 'night';       
        console.log('phase is set')
        this.notifySubs( this.getAppTheme() );
    }

    this.getAppTheme = function() {
        return { 
            background: this.theme('bgColor'), 
            opacity: this.theme('bgOpacity') 
        };
    }

    this.getIconColor = function() {
        return { color: this.theme('accent') };
    }

    this.getCardColor = function() {
        return { color: this.theme('accent') };
    }

    this.getGraphColor = function() {
        return this.theme('accent');
    }

    this.getCardStyle = function() {
        return { background: this.theme('cardBg'), color: this.theme('color')}
    }
}

Theme.prototype = Object.create( Publisher.prototype );
Theme.prototype.constructor = Theme;

const themes = new Theme(); 

export {
    themes
}