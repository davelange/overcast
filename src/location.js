import {Publisher} from './publisher';

const Location = function() {

    Publisher.call(this);

    this.city = '';

    this.country = '';    

    this.toURL = function(str) {
        return str.toLowerCase().replace(/\s/g, '-');        
    }

    this.toName = function(str) {
        return str.replace(/-/g, ' ');        
    }

    this.getName = function() {
        return this.city&&this.country ? 
            `${this.city}, ${this.country}` : this.city;
    }

    this.set = function(args) {
        for( let key in args ) {
            this[key] = args[key];
        }
        this.notifySubs(this.getName());
    }
}

Location.prototype = Object.create( Publisher.prototype );
Location.prototype.constructor = Location;

const location = new Location();

export {
    location
}