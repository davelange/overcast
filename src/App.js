import React from 'react';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import { BrowserRouter } from 'react-router-dom';
import {geoLocate} from './api/requests';
import Forecast from './pages/Forecast';
import Search from './components/Search';

function App() {
  
  const [location, setLocation] = React.useState({city: '', country: ''});
  
  React.useEffect( () => {    
    if( !location.city ) {
      geoLocate().then( res => setLocation({
        city: res.city,
        country: res.country
      }));
    }
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>

        <Search 
          location={location} 
          setLocation={setLocation}/>

        { location.city &&          
          <Forecast 
            location={location} 
            setLocation={setLocation}/>   
        }

      </BrowserRouter>      
    </div>
  );
}

export default App;
