import React from 'react';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import {geoLocate} from './api/requests';
import {themes} from './theme';
import Search from './components/Search';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';

function App() {
  
  const [location, setLocation] = React.useState({city: '', country: ''});    
  
  React.useEffect( () => {                
    if( !location.city ) {
      geoLocate().then( res => setLocation({ city: res.city, country: '' }) );
    }    
  }, []); 

  return (
    <div className="App lg-flex" style={ themes.getAppTheme() }>      

      <div className="baloon"></div>
        
      <div className="lg-flex__half">
        <Search 
          location={location} 
          setLocation={setLocation} />
        
        <CurrentWeather 
          city={location.city}
          setLocation={setLocation} /> 

      </div>

      <Forecast 
        city={location.city} />           
    </div>
  );
}

export default App;
