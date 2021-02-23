import React from 'react';
import {location} from '../location';
import FeatherIcon from 'feather-icons-react';

function Search({changeLocation}) {    
    
    const inputVal = React.useRef(null);

    location.subscribe( name => {        
        if( inputVal.current ) {
            inputVal.current.value = name;   
        }                
    })            

    function handleSubmit(e) {
        e.preventDefault();                        
        changeLocation( e.target.elements.city.value );             
    }
    
    return( 
        <div>        
            <form 
                onSubmit={ e => handleSubmit(e) } 
                className="search">

                <input
                    onFocus={ e => e.target.select() }
                    ref={inputVal}
                    className="search__input"
                    type="text" 
                    name="city" />
     
                <button 
                    className="search__submit btn"
                    type="submit">
                        <FeatherIcon 
                            icon="search" 
                            width="16" 
                            height="16" 
                            stroke="#fff" />
                </button>
            </form>            
        </div>
    )
}

export default Search;