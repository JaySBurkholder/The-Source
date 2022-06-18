// ====>user input
// ====>data gets sent to geo api
// ====>geo api returns data
// ====>that data gets put into function var=userLocation
// ====>userLocation gets concatenated into fetch function for weather api
// ====>weather api returns data
// ====>data goes into HTML

// geolocation API info

// var cityName 
    
// Submit location info form and console log it
document.getElementById("citySubmit").onclick = function () {
    var cityName = document.getElementById("cityInputField").value;
        console.log(cityName)
        cityLocation(cityName)
};

// don't have an attitude, grab that longitude and latitude!!!
        var cityLocation = function(cityName) {
            var locationKey = "6d8a186db6fcb3e3e9cf63088cc332f9"
            var requestLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${locationKey}`
            fetch(requestLocationURL)
            .then(function(response) {
                response.json().then(function(locationData) {
                    // displayWeather(data, city);
                    console.log(locationData)
                        .then(function(lonLat) {
                            var id=lonLat.results[0].id;
    
                            var lonLatObj = {
                                // whatever id longitude and latitude are defined as in the JSON data :id
                                "lat":id,
                                "lon":id,
                            };
                        })
                })
            })    
    };



    // pull long/lat id from array inside of locationData
             
    



// // this is the variable where the long/lat coming back from the first API will be stored
// var userLocation = function() {
//     // myptv api needs to convert this info to lat/long
//     // myptv api needs to send lat/long to weatherbit api   
//     // weatherbit api needs to concatenate var userLocation into fetch request
// }




// // weather api info
// var weatherKey = "733fa984a871e6fcf62ed27f8e4dba3f"
// var requestWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${weatherKey}"
// // var userLocation = function()
// // + '&' + userLocation

// // // fetch weather data
// fetch(requestWeatherURL + weatherKey)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("an error occurred, please try again")
//     });




// // // putting json data into html
// // function = makeHTMLwithData() {
// //     for loop, each loop
// //     var forecast = document.createElement('div')
// //     // forecast.innerHTML = weatherinfo
// //     document.querySelector('#forecast').append(forecast)

// }



// his code


// var cityForm = document.querySelector("#city-form");
// var cityInput = document.querySelector("#city");
// var currrentWeather = document.querySelector("#current-weather");
// var currrentWeather = document.querySelector("#current-weather");
// var cityInputSearch = document.querySelector("#searched-city");
// var searchList = document.querySelector("#searchList");
// var apiKeyGeo = "6d8a186db6fcb3e3e9cf63088cc332f9";

// var cities = [];

// https://api.openweathermap.org/data/2.5/weather?q=Akron,%20OH&units=imperial&appid=92fb9e2a80553525912a61e5eeb8ce46

// // Submit form function
// var submitForm = function(event) {
//     event.preventDefault();
//     var city = cityInput.value.trim();
//     if (city) {
//         cityWeather(city);
//         cities.unshift({city});
//         cityInput.value = "";
//     };
// };

    // searchStorage();
    //  searched(city);

    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=6d8a186db6fcb3e3e9cf63088cc332f9


// var cityWeather = function(city) {
//     var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKeyGeo}`
//     fetch(apiURL)
//     .then(function(response) {
//         response.json().then(function(data) {
//             displayWeather(data, city);
//             console.log(city);
//             console.log(displayWeather);
//         });
//     });
// };


// Display current weather and creating elements
// var displayWeather = function(weather, searchCity) {
//     currrentWeather.textContent = "";
//     cityInputSearch.textContent = searchCity;

//     var currentDay = document.createElement("span")
//     currentDay.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
//     cityInputSearch.appendChild(currentDay);

//     var icons = document.createElement("img")
//     icons.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
//     cityInputSearch.appendChild(icons);

//     var temperature = document.createElement("span");
//     temperature.textContent = "Temperature: " + weather.main.temp + " °F";
//     temperature.classList = "list-group-item"

//     var humid = document.createElement("span");
//     humid.textContent = "Humidity: " + weather.main.humidity + " %";
//     humid.classList = "list-group-item"

//     var windSpeed = document.createElement("span");
//     windSpeed.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
//     windSpeed.classList = "list-group-item"
//     currrentWeather.appendChild(temperature);
//     currrentWeather.appendChild(humid);
//     currrentWeather.appendChild(windSpeed);

//     var lat = weather.coord.lat;
//     var lon = weather.coord.lon;
//     uvIndex(lat,lon);
// };

// // Latitude and Longitute
// var uvIndex = function(lat, lon) {
//     var futureURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;
//     fetch(futureURL)
//     .then(function(response) {
//         response.json().then(function(data) {
//             uvIndexDisplay(data)
//         });
//     });
// };

// var searchHandler = function(event) {
//     var city = event.target.getAttribute("data-city")
//     if (city) {
//         cityWeather(city);
//         fiveDay(city);
//     }
// };

// cityForm.addEventListener("submit", submitForm);
// searchList.addEventListener("click", searchHandler);



