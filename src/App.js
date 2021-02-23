import React from 'react';
import {useHistory, Route} from 'react-router-dom';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import {geo} from './api/requests';
import {formatCityURL} from './helpers';
import Search from './components/Search';
import Background from './components/Background';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';

function App() {    

  const history = useHistory()
  
  React.useEffect( () => {                
    geo.locate().then( res => history.push(`/${formatCityURL( res.city )}`)  );   
  }, []); 

  function changeLocation(str) {
    if( str ) {      
      history.push(`/${formatCityURL( str )}`);   
    }    
  }  

  return (
    <div className="App lg-flex">      
      
      <Route path="/:city" >

        <Background />
        
        <div className="lg-flex__half">

          <Search             
            changeLocation={changeLocation} />
          
          <CurrentWeather /> 
  
        </div>
  
        <Forecast />           

      </Route>      
    </div>
  );
}

export default App;
