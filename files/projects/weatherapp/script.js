
const cityName = document.getElementById('city-name')
const weatherType = document.getElementById('weather-type')
const temp = document.getElementById('temp')
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')


  getWeatherData = async (city) => {
    
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key':     
     '27ffeaffa2msh257ea9dabc1d4dcp17fbf9jsn28e76a9e7a2f',
    		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
    	}
    };
return fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`, options)
    	.then(response => response.json())
    	.then(response => response)
    	.catch(err =>err);

  }

const  searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)


}

const showWeatherData = (weatherData) => {
  console.log('🍪');
  console.log(weatherData)
  document.getElementById('weather-type').innerText = weatherData.currentConditions.conditions
   document.getElementById('humidity').innerText = weatherData.currentConditions.humidity
   document.getElementById('description').innerText = weatherData.description
   document.getElementById('temp').innerText = weatherData.currentConditions.temp
  document.getElementById('city-name').innerText = weatherData.resolvedAddress



}



