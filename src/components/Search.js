function Search({location, setLocation}) {

    function handleSubmit(e) {
        e.preventDefault();
        let input = e.target.elements.city.value;        
        if( !input ) {
            return false;
        }        
        setLocation({ city: input, country: '' });
    }

    const locationName = () => {
        return location.country ? `${location.city}, ${location.country}` : location.city;
    }

    return( 
        <div>
            <form onSubmit={ e => handleSubmit(e) }>
                <input type="text" defaultValue={locationName()} name="city" />
                <button type="submit">OK</button>
            </form>
        </div>
    )
}

export default Search;