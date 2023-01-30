/**
 * Weather App
 * Done: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

const temp = document.getElementById('temp')
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const cityName = document.getElementById('city-name');
const weatherType = document.getElementById('weather-type');

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API key
    const fullURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    //CODE GOES HERE
    const weatherPromise = fetch(fullURL);
    return weatherPromise.then((response) => {
        // console.log(response);
        return response.json()
    })
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    const weatherData = getWeatherData(city);
    weatherData.then((response) => showWeatherData(response));

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
    //CODE GOES HERE
    // console.log(weatherData);
    console.log(weatherData);
    temp.textContent = weatherData.main.temp;
    minTemp.textContent = weatherData.main.temp_min;
    maxTemp.textContent = weatherData.main.temp_max;
    // console.log(weatherData.main.name);
    cityName.textContent = weatherData.name;
    weatherType.textContent = weatherData.weather[0].description.toUpperCase();
    // console.log(weatherData.weather[0].description);
}

