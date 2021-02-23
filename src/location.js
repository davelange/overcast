const location = {

    city: '',

    country: '',

    subs: [],

    toURL() {
        return this.name.toLowerCase().replace(' ', '-');
    },

    getName() {
        return this.city&&this.country ? 
            `${this.city}, ${this.country}` : this.city;
    },    

    set(args) {
        for( let key in args ) {
            this[key] = args[key];
        }
        this.notifySubs();
    },

    subscribe(fn) {
        this.subs.push(fn);
    },

    notifySubs() {
        this.subs.forEach( fn => fn( this.getName() ) );
    }
    
}

export {
    location
}