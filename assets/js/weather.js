// ====>user input
// ====>data gets sent to geo api
// ====>geo api returns data
// ====>that data gets put into function var=userLocation
// ====>userLocation gets concatenated into fetch function for weather api
// ====>weather api returns data
// ====>data goes into HTML

    
// Have user input their location and console log it
document.getElementById("citySubmit").onclick = function () {
    var cityName = document.getElementById("cityInputField").value;
        console.log(cityName)
    // give cityName to function cityLocation
        cityLocation(cityName)
        // give cityName to usercity to be used in HTML header h4
        document.getElementById("usercity").innerHTML = cityName;
};

// don't have an attitude, grab that longitude and latitude!!!
        var cityLocation = async function(cityName) {
            // geo api
            var locationKey = "6d8a186db6fcb3e3e9cf63088cc332f9"
            var requestLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${locationKey}`
            // fetch dat geo api
            await fetch(requestLocationURL)
            .then(function(response) {
                response.json().then(function(locationData) {
                    // makin sure that lat and lon return me some yummy info
                    console.log(lat);
                    console.log(lon);
                    // making lat&lon variables
                    var lat = locationData[0].lat;
                    var lon = locationData[0].lon;
                    // lat&lon to object
                    var latlonObj = {
                        "latId": lat,
                        "lonId": lon,
                    }
                    weatherForecast(latlonObj)
                })
        })    
    };

// forecast function defined, fetch request with new URL that includes lat&lon, then logging it
var weatherForecast = async function(weather) {
    console.log(weather)
    // weather api info and grabbing those lat and lon variables
    var weatherKey = "a0095fd1fad6e402ed5242dd036ebc5f"
    var lat = weather.latId
    var lon = weather.lonId
    var requestWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=imperial`
    // Here Fido, fetch the weather api data!
    await fetch(requestWeatherURL)
    .then(function(weatherResponseData) {
        weatherResponseData.json().then(function(forecast) {
            // now we can see the sky's behavior in our console
            // console.log(forecast)
            displayForecast(forecast);
        })
    })
}    

    
// Loop over weather data
// var currentDay = function (forecast) {
//     for (var i = 0; i < forecast.length; i++) {
//         var weatherMain = forecast[i].main;
//     }
// }


// // container for weather data
// var mainWeatherForecastEl = document.createElement("div");
//     mainWeatherForecastEl.classList = "list-item flex-row justify-space-between align-center";

// // span element for data type name
// var titleEl = document.createElement("span");
// titleEl.textContent = "Main Forecast";


// var mainWeatherForecastEl = document.querySelector("#mainWeatherForecast");
// titleEl.textContent = "Main Forecast"

    // reference html element mainForecast
    var mainForecast = document.getElementById("mainForecast");
    var currentTemp = document.getElementById("currentTemp")
    var tempMax = document.getElementById("tempMax")
    var tempMin = document.getElementById("tempMin")
    var humidity= document.getElementById("humidity")
    var feelsLike = document.getElementById("feelsLike")
    var icon = document.getElementById("icon")






    // Display current weather
var displayForecast = function(forecast) {
    console.log(forecast);
    console.log(forecast.main.temp);
    var weatherCloudsForecast = "Current Weather is " + forecast.weather[0].description;
    var currentTempForecast = "Current Temperature = " + forecast.main.temp + " °F";
    var tempMaxForecast = "Max Temperature = " + forecast.main.temp_max + " °F";
    var tempMinForecast = "Min Temperature = " + forecast.main.temp_min + " °F";
    var humidityForecast = "Current Humidity = " + forecast.main.humidity;
    var feelsLikeForecast = "Feels like = " + forecast.main.feels_like + " °F";
    // var iconForecast = forecast.weather[0].icon


    mainForecast.innerHTML = weatherCloudsForecast;
    currentTemp.innerHTML = currentTempForecast
    tempMax.innerHTML = tempMaxForecast
    tempMin.innerHTML = tempMinForecast
    humidity.innerHTML = humidityForecast
    feelsLike.innerHTML = feelsLikeForecast
    icon.innerHTML = iconForecast

// var temp = document.createElement("span");
//         temp.classList = "card-body text-center";
//         temp.textContent = dailyForecast.main.temp + " °F";
};



        // // container for weather data
        // var mainWeatherForecastEl = document.createElement("div");
        // mainWeatherForecastEl.classList = "list-item flex-row justify-space-between align-center";

        // // // span element for data type name
        // // var titleEl = document.createElement("span");
        // // titleEl.textContent = weatherMain;

        // // append
        // mainWeatherForecastEl.appendChild(titleEl);

        // // append container to html dom
        // weatherOnDisplay.appendChild(mainWeatherForecastEl);
    










    // currentDay.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    // cityInputSearch.appendChild(currentDay);



    


    // var icons = document.createElement("img")
    // icons.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    // cityInputSearch.appendChild(icons);

    // var temperature = document.createElement("span");
    // temperature.textContent = "Temperature: " + weather.main.temp + " °F";
    // temperature.classList = "list-group-item"

    // var humid = document.createElement("span");
    // humid.textContent = "Humidity: " + weather.main.humidity + " %";
    // humid.classList = "list-group-item"

    // var windSpeed = document.createElement("span");
    // windSpeed.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
    // windSpeed.classList = "list-group-item"
    // currrentWeather.appendChild(temperature);
    // currrentWeather.appendChild(humid);
    // currrentWeather.appendChild(windSpeed);

//     var lat = weather.coord.lat;
//     var lon = weather.coord.lon;
//     uvIndex(lat,lon);
// };
    



// // putting json data into html
// function = makeHTMLwithData() {
//     for loop, each loop
//     var forecast = document.createElement('div')
//     // forecast.innerHTML = weatherinfo
//     document.querySelector('#forecast').append(forecast)
// }


// cityForm.addEventListener("submit", submitForm);
// searchList.addEventListener("click", searchHandler);

