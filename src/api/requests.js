import { OWM_KEY, ABS_KEY } from './key.js';

//Cache object
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

//Fetch
const api = {        
    makeRequest: async function(url) {
        return await fetch( url );
    },

    validate: function(res) {        
        if( res.status !== 200 ) {
            return false;
        }
        else {
            return res.json();    
        }
    },

    get: async function( url ) {
        let req = await this.makeRequest(url);
        return this.validate(req);
    }
}

//Geo location
const geo = {
    key: ABS_KEY,

    async locate() {        
        return await api.get( `https://ipgeolocation.abstractapi.com/v1?api_key=${this.key}` );        
    }        
}



//Weather
const weather = {
    key: OWM_KEY,
    
    baseURL: 'https://api.openweathermap.org/data/2.5/',

    async getForecast( city ) {                        
        return await api.get( `${this.baseURL}forecast?appid=${this.key}&q=${city}&units=metric` );        
    },

    async getCurrentWeather( city ) {        
        return await api.get( `${this.baseURL}weather?appid=${this.key}&q=${city}&units=metric` )                                
    },

    async get( type, city ) {         
        if( city ) {
            let cached = cache.get(type, city.toLowerCase());

            if( !cached ) {
                let data;
                if( type === 'current' ) {
                    data = await this.getCurrentWeather(city.toLowerCase());
                }                    
                else if( type === 'forecast' ) {
                    data = await this.getForecast(city.toLowerCase());
                }
                cache.set( type, city, data );
                return data;
            }
            else {
                return cached;
            }        
        }
    }    
}

export {
    geo,    
    weather    
}