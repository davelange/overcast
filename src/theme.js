import {isDayTime} from './helpers';

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

export {
    themes
}