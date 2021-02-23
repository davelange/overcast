import React from 'react';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import {geo} from './api/requests';
import Search from './components/Search';
import Background from './components/Background';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';

function App() {
  
  const [location, setLocation] = React.useState({city: '', country: ''});    
  
  React.useEffect( () => {                
    if( !location.city ) {
      geo.locate().then( res => setLocation({ city: res.city, country: '' }) );
    }    
  }, []); 

  return (
    <div className="App lg-flex">      
            
      <Background />
        
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
