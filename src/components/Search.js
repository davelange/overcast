import React from 'react';
import FeatherIcon from 'feather-icons-react';

function Search({location, setLocation}) {
    
    React.useEffect( () => {        
        const el = document.querySelector('.search__input');
        el.value = locationName();
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        let input = e.target.elements.city.value;        
        if( input ) {
            setLocation({ city: input, country: '' });    
        }                
    }
    
    function locationName() {
        return location.country ? `${location.city}, ${location.country}` : location.city;
    }

    return( 
        <div>
            <form 
                onSubmit={ e => handleSubmit(e) } 
                className="search">

                <input
                    onFocus={ e => e.target.select() }
                    className="search__input"
                    type="text" 
                    name="city" />
     
                <button 
                    className="search__submit btn"
                    type="submit">
                        <FeatherIcon icon="search" width="16" height="16" />
                </button>
            </form>
        </div>
    )
}

export default Search;