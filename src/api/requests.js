import { KEY } from './key.js';

async function geoLocate() {
    const URL = 'http://ip-api.com/json';
    let req = await fetch(URL);
    return await req.json();    
}
const cache = {
    current: {},
    forecast: {},
    get(type, city) {
        if( (city in this[type]) ) {
            return this[type][city];
        }
        else {
            return false;
        }
    },
    set(type, city, data) {
        this[type][city] = data; 
    }
}

const weather = {
    key: KEY,
    
    baseURL: 'https://api.openweathermap.org/data/2.5/',

    async getForecast( city ) {        
        let req = await fetch( `${this.baseURL}forecast?appid=${KEY}&q=${city}&units=metric` );    
        let res = this.validateResponse( req );
        cache.set('forecast', city, await res);        
        return res;
    },

    async getCurrentWeather( city ) {        
        let req = await fetch( `${this.baseURL}weather?appid=${KEY}&q=${city}&units=metric` );    
        let res = this.validateResponse( req );
        cache.set('current', city, await res);        
        return res;
    },

    async get( type, city ) {         
        if( city ) {
            let cached = cache.get(type, city.toLowerCase());

            if( !cached ) {
                if( type === 'current' )
                    return await this.getCurrentWeather(city.toLowerCase());
                else if( type === 'forecast' )
                    return await this.getForecast(city.toLowerCase());
            }
            else {
                return cache.get(type, city);
            }        
        }
    },

    validateResponse(res) {
        if( res.status !== 200 ) {
            return false;
        }
        else return res.json();
    }
}

export {
    geoLocate,    
    weather    
}