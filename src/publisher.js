const Publisher = function() {
    
    this.subs = [];
    
    this.subscribe = function( fn ) {
        this.subs.push(fn);
    }

    this.notifySubs = function(data) {
        this.subs.forEach( fn => fn(data) );
    }
}

export { Publisher };
