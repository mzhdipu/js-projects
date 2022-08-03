


function getWeatherData(city){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de046760d5msha52276f162d9984p1e0e3fjsne37051063a26',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    

   return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}

async function searchCity(){
    let city = document.getElementById("city-input").value
    console.log(city);
    let data = await getWeatherData(city);
    showWeatherData(data);
}


function showWeatherData(weatherData){
    //console.log(weatherData.main.temp)
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;

}







// function getWeatherData(city){
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'de046760d5msha52276f162d9984p1e0e3fjsne37051063a26',
//         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
//     }
// };

// fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London&units=imperial', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

// function searchCity(){
//     let city = document.getElementById("city-input").value
//     console.log(city)
//      getWeatherData(city)
//      showWeatherData()
//  }

// function showWeatherData(){
//     document.getElementById(temp).innerText = "88.6";

// }