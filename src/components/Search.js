import React from 'react';
import {themes} from '../theme';
import FeatherIcon from 'feather-icons-react';

function Search({location, setLocation, message}) {
    
    React.useEffect( () => {                      
        document.querySelector('.search__input').value = locationName();
    }, [location.country])
    
    function handleSubmit(e) {
        e.preventDefault();
        let input = e.target.elements.city.value;        
        if( input ) {
            setLocation({ city: input, country: '' });    
        }                
    }
    
    const locationName = () => {
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
                        <FeatherIcon icon="search" width="16" height="16" stroke={themes.getIconColor().color} />
                </button>
            </form>
            <center>{message}</center>
        </div>
    )
}

export default Search;