const KEY = '22ad84cc43a5ed6d79d4a95cef4b1e3f';

async function geoLocate() {
    const URL = 'http://ip-api.com/json';
    let req = await fetch(URL);
    return await req.json();    
}

async function getForecast(city) {
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?appid=${KEY}&q=${city}&cnt=5&units=metric`;
    let req = await fetch(URL);
    return await req.json(); 
    //return {"city":{"id":2742611,"name":"Aveiro","coord":{"lon":-8.6455,"lat":40.6443},"country":"PT","population":54162,"timezone":0},"cod":"200","message":0.2795216,"cnt":5,"list":[{"dt":1613217600,"sunrise":1613201464,"sunset":1613239604,"temp":{"day":15.07,"min":9.61,"max":17.62,"night":11.3,"eve":12.28,"morn":9.71},"feels_like":{"day":12.7,"night":9.67,"eve":11.25,"morn":8.39},"pressure":1027,"humidity":68,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"speed":3.15,"deg":199,"clouds":36,"pop":0},{"dt":1613304000,"sunrise":1613287788,"sunset":1613326077,"temp":{"day":16.49,"min":10.55,"max":17.86,"night":11.53,"eve":13.53,"morn":10.74},"feels_like":{"day":14.23,"night":8.71,"eve":11.36,"morn":7.72},"pressure":1026,"humidity":59,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"speed":2.72,"deg":182,"clouds":100,"pop":0},{"dt":1613390400,"sunrise":1613374111,"sunset":1613412550,"temp":{"day":16.5,"min":10,"max":18.42,"night":12.95,"eve":14.97,"morn":10},"feels_like":{"day":12.68,"night":9.92,"eve":12.06,"morn":6.93},"pressure":1026,"humidity":57,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"speed":4.77,"deg":152,"clouds":100,"pop":0},{"dt":1613476800,"sunrise":1613460432,"sunset":1613499022,"temp":{"day":13.61,"min":10.79,"max":13.86,"night":10.79,"eve":12.02,"morn":12.35},"feels_like":{"day":10.25,"night":10.39,"eve":11.07,"morn":8.32},"pressure":1026,"humidity":86,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.39,"deg":193,"clouds":100,"pop":0.88,"rain":2.45},{"dt":1613563200,"sunrise":1613546753,"sunset":1613585494,"temp":{"day":13.95,"min":8.85,"max":14.05,"night":10.89,"eve":11.56,"morn":8.85},"feels_like":{"day":11.45,"night":9.08,"eve":9.26,"morn":6.91},"pressure":1024,"humidity":66,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"speed":2.8,"deg":196,"clouds":70,"pop":0.12}]};
}

async function getCurrentWeather(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${KEY}&q=${city}&units=metric`;
    let req = await fetch(URL);
    return await req.json(); 
    //return {"coord":{"lon":-8.6455,"lat":40.6443},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":17.86,"feels_like":15.47,"temp_min":16,"temp_max":21.11,"pressure":1026,"humidity":72},"visibility":10000,"wind":{"speed":4.63,"deg":240},"clouds":{"all":40},"dt":1613228799,"sys":{"type":1,"id":6898,"country":"PT","sunrise":1613201464,"sunset":1613239604},"timezone":0,"id":2742611,"name":"Aveiro","cod":200};
}

export {
    geoLocate,
    getCurrentWeather,
    getForecast
}