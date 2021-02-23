import React from 'react';
import {useParams} from 'react-router-dom';
import {themes} from '../theme';
import FeatherIcon from 'feather-icons-react';

function Search({changeLocation}) {

    let {city} = useParams();

    const inputVal = React.useRef(null);
    
    React.useEffect( () => {
        inputVal.current.value = city;
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
                            stroke={themes.getIconColor().color} />
                </button>
            </form>            
        </div>
    )
}

export default Search;