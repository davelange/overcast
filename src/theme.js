import {isDayTime} from './helpers';

const themes = {
    
    subs: [],

    schemes: {
        day: {
            bg: '#284ba5', 
            color: '#fff', 
            accent: '#284ba5',                        
            bgColor: '#5988FF',
            bgOpacity: .6  
        },
        night: {
            bg: '#fafafa', 
            color: '#fff', 
            accent: '#ffff2e',       
            bgColor: '#040b1d',
            bgOpacity: .8                  
        },
    },
    
    phase: '',

    theme(k) {
        return this.phase ? this.schemes[this.phase][k] : '';
    },

    setPhase( data ) {        
        this.phase = isDayTime(data) ? 'day' : 'night';       
        this.notifySubs();
    },

    getAppTheme() {
        return { 
            background: this.theme('bgColor'), 
            opacity: this.theme('bgOpacity') 
        };
    },

    getIconColor() {
        return { color: this.theme('bg') };
    },

    getCardColor() {
        return { color: this.theme('accent') };
    },

    addSub(fn) {
        this.subs.push(fn);
    },

    notifySubs() {
        this.subs.forEach( fn => fn() );
    }

}

export {
    themes
}