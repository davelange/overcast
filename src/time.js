const time = {

    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

    timezone: 0,

    getForecastDate(i) {        
        const d = new Date();
        d.setDate( d.getDate() + (i+1) );        
        return `${this.weekdays[ d.getDay() ]}, ${ d.getDate() }`;
    },

    tmzOffset(dt) {
        const d = new Date(dt);
        d.setHours( d.getHours() + ( this.timezone/60/60) );
        return d;
    },

    isDayTime(data) {
        const curr = this.tmzOffset( Date.now());
        const sunrise = this.tmzOffset(data.sys.sunrise*1000, data.timezone);
        const sunset = this.tmzOffset(data.sys.sunset*1000, data.timezone);    
        return curr.getHours() > sunrise.getHours() && curr.getHours() < sunset.getHours();
    },

    getLocalTime(format) {
        const d = this.tmzOffset( Date.now() );
        return this.formatTime( d, format );        
    },

    getDate(n, format) {
        let d = this.tmzOffset( n*1000 );
        return this.formatTime(d, format);
    },

    formatTime(d, format) {
        if( format === 'h:m') {
            const mins = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
            return `${d.getHours()}:${mins}`;
        }
        else if( format === 'h') {
            return `${d.getHours()}h`;
        }
    },

    setTimezone(val) {
        this.timezone = val;
    }
}

export {
    time
}