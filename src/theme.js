import {isDayTime} from './helpers';

const themes = {
    
    subs: [],

    schemes: {        
        day: {
            bgColor: '#5988FF',
            bgOpacity: .6,
            cardBg: '#ffffffdd',
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
        return { color: this.theme('accent') };
    },

    getCardColor() {
        return { color: this.theme('accent') };
    },

    getCardStyle() {
        return { background: this.theme('cardBg'), color: this.theme('color')}
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