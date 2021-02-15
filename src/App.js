import React from 'react';
import './assets/css/normalize.css';
import './assets/css/master.css';
import './assets/css/weather-icons.min.css';
import { useHistory } from 'react-router-dom';
import {getCurrentWeather, getForecast} from './api/requests';
import {theme, themes} from './theme';
import Search from './components/Search';
import CurrentWeather from './containers/CurrentWeather';
import ForecastCard from './containers/ForecastCard';

function App() {
  
  const [location, setLocation] = React.useState({city: '', country: ''});
  const [current, setCurrent] = React.useState();
  const [forecast, setForecast] = React.useState();  

  let history = useHistory();
  
  React.useEffect( () => {            
    if( location.city ) {
      requestCurrent();
      requestForecast();
      setRoute();
    }
  }, [location.city]);

  async function requestCurrent() {
    let current = await getCurrentWeather(location.city);
    setCurrent(current);    
    setLocation({ city: current.name, country: current.sys.country });    
    themes.setPhase(current);
  }

  async function requestForecast() {
    let forecast = await getForecast(location.city);
    setForecast(forecast.list);
  }  

  function setRoute() {
    history.push(`/${encodeURIComponent( location.city.toLowerCase() )}`);        
  }

  return (
    <div className="App lg-flex" style={ themes.getAppTheme() }>      

      <div className="baloon"></div>
        
      <div className="lg-flex__half">
        <Search 
          location={location} 
          setLocation={setLocation}/>

        { current &&
          <CurrentWeather 
            weather={current} /> }
      </div>
      
      <div className="lg-flex__half">
        { forecast && forecast.map( (item, i) =>           
            <ForecastCard 
                key={i}
                i={i}
                weather={item} />           
        )}
      </div>

    </div>
  );
}

export default App;
