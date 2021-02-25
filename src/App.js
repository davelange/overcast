import React from 'react';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import {useHistory, Route} from 'react-router-dom';
import {geo} from './api/requests';
import {location} from './location';
import Search from './components/Search';
import Background from './components/Background';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';

function App() {    

  const history = useHistory()
  
  React.useEffect( () => {                
    geo.locate().then( res => history.push(`/${location.toURL( res.city )}`)  );   
    // eslint-disable-next-line 
  }, []); 

  function changeLocation(str) {
    history.push(`/${location.toURL( str )}`);      
  }  

  return (
    <div className="App lg-flex">      
      
      <Route path="/:city" >

        <Background />
        
        <div className="lg-flex__half">
          <section className="main">

          <Search             
            changeLocation={changeLocation} />
          
          <CurrentWeather /> 
          
          </section>
        </div>
  
        <Forecast />           

      </Route>      
    </div>
  );
}

export default App;
