const Graph = function(options) {
    
    this.data = options.data;

    this.el = options.el

    this.strokeColor = options.stroke;

    this.PIX_HEIGHT = this.el.getBoundingClientRect().height-20;

    this.PIX_WIDTH = this.el.getBoundingClientRect().width;
    
    this.temps = function() {
        return this.data.map( item => item.main.temp )
    }

    this.maxTemp = function(arr) {
        return Math.max( ...arr );
    }

    this.minTemp = function(arr) {
        return Math.min( ...arr );
    }

    this.offsetTemps = function() {       
        let offset = this.minTemp(this.temps()) - 1; 
        return this.temps().map( n => n - offset );   
    }

    this.tempToPixel = function(n) {        
        return Math.round(n * this.PIX_HEIGHT / this.maxTemp( this.offsetTemps() ));
    }

    this.points = function() {        
        return this.offsetTemps().map( (item, i,) => {
            let start = i === 0 ? 0 : i+1;
            return [
                start * this.PIX_WIDTH/this.data.length,
                this.tempToPixel(item),                
            ]
        });
    }

    this.generateHTML = function() {        
        let line = this.points().map( (d, i, arr) => i === 0 ? `M ${d[0]},${d[1]}` : ` L ${d[0]},${d[1]}` ).join('');
        return `<path stroke="${this.strokeColor}" fill="none" d="${line}" />`;
    }

    this.draw = function() {
        if( this.el ) {
         this.el.innerHTML = this.generateHTML();
        }                 
    }    
}
export {
    Graph
}
