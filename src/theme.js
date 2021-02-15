import {isDayTime} from './helpers';

const scale = [
    {
        bg: '#fff', color: '#303030', accent: '#5988FF'
    },
    {
        bg: '#83A3F5', color: '#fff', accent: '#F5F936'
    },
    {
        bg: '#5988FF', color: '#fff', accent: '#F3E34D'
    },
    {
        bg: '#F5F936', color: '#333', accent: '#5988FF'
    },
    {
        bg: '#F3E34D', color: '#fff', accent: '#83A3F5'
    },
    {
        bg: '#F9CE36', color: '#fff', accent: '#2C46A0'
    }
        
]

const themes = {
    
    schemes: {
        day: {
            bg: '#284ba5', 
            color: '#fff', 
            accent: '#284ba5',
            gradient: 'linear-gradient(100deg, #5988FF, #5988FF66)'
        },
        night: {
            bg: '#fafafa', 
            color: '#fff', 
            accent: '#ffff2e',
            gradient: 'linear-gradient(70deg, #000, #253358)'
        },
    },
    
    phase: '',

    theme(k) {
        return this.phase ? this.schemes[this.phase][k] : '';
    },

    setPhase( data ) {        
        this.phase = isDayTime(data) ? 'day' : 'night';       
    },

    getAppTheme() {
        return { background: this.theme('gradient') };
    },

    getIconColor() {
        return { color: this.theme('bg') };
    },

    getCardColor() {
        return { color: this.theme('accent') };
    }

}

function theme(t) {
    let item = scale[getScaleItem(t)];    
    return item;
}

function getScaleItem(t) {
    if( t < 5 ) return 0;
    else if( t < 15 ) return 1;
    else if( t < 25 ) return 2;
    else if( t < 30 ) return 3;
    else if( t < 40 ) return 4;
    else if( t >= 40 ) return 5;
    else return 2;
}

export {
    theme,
    themes
}