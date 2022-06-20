// ====>user input
// ====>data gets sent to geo api
// ====>geo api returns data
// ====>that data gets put into function var=userLocation
// ====>userLocation gets concatenated into fetch function for weather api
// ====>weather api returns data
// ====>data goes into HTML


    
// Submit location info form
// document.getElementById("citySubmit").onclick = function () {
//     var cityName = document.getElementById("cityInputField").value;
//     console.log(cityName);
// }

// city name results from input form
// var cityName = function() {
//     document.getElementById("userInput").value;
// };

    // encode the string input values from cityName
    // encodeURIComponent(cityName);



// geolocation API info
// var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?"
// var locationKey = "apiKey=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"




// // city name results from input form
// var cityName = function(requestLocationURLwithAPIkey) {
//     document.getElementById("userInput").value;

// // calling location API
// fetch(requestLocationURL + "&" + cityName + "&" + locationKey)
//     .then(function(response) {
//         return response.json();
//     })
//         .then(function (locationData) {
//                 console.log(locationData);
//         })
//             .catch(error => {
//                     console.log("an error occurred, please try again")
//             })

// //     // pull long/lat id from array inside of locationData
// //                 .then(function (response) {
// //                     response.json().then(function(longLat) {
// //                     var id=longLat.results[0].id;

// //                     var longLatObj = {
// //                         // whatever id longitude and latitude are defined as in the JSON data :id
// //                     };
// //                 });
// //             });
// //     }



// // this is the variable where the long/lat coming back from the first API will be stored
// var userLocation = function() {
//     // myptv api needs to convert this info to lat/long
//     // myptv api needs to send lat/long to weatherbit api   
//     // weatherbit api needs to concatenate var userLocation into fetch request
// }




// // weather api info
// var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
// var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
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

var cityForm = document.querySelector("#city-form");
var cityInput = document.querySelector("#city");
var currrentWeather = document.querySelector("#current-weather");
var currrentWeather = document.querySelector("#current-weather");
var cityInputSearch = document.querySelector("#searched-city");
var searchList = document.querySelector("#searchList");
var apiKey = "92fb9e2a80553525912a61e5eeb8ce46";

var cities = [];

// Submit form funtion
var submitForm = function(event) {
    event.preventDefault();
    var city = cityInput.value.trim();
    if (city) {
        cityWeather(city);
        cities.unshift({city});
        cityInput.value = "";
    } else {
        alert("Please enter a city!")
    };
    // searchStorage();
    //  searched(city);
};

var cityWeather = function(city) {
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    fetch(apiURL)
    .then(function(response) {
        response.json().then(function(data) {
            displayWeather(data, city);
        });
    });
};

// Display current weather and creating elements
var displayWeather = function(weather, searchCity) {
    currrentWeather.textContent = "";
    cityInputSearch.textContent = searchCity;

    var currentDay = document.createElement("span")
    currentDay.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    cityInputSearch.appendChild(currentDay);

    var icons = document.createElement("img")
    icons.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    cityInputSearch.appendChild(icons);

    var temperature = document.createElement("span");
    temperature.textContent = "Temperature: " + weather.main.temp + " °F";
    temperature.classList = "list-group-item"

    var humid = document.createElement("span");
    humid.textContent = "Humidity: " + weather.main.humidity + " %";
    humid.classList = "list-group-item"

    var windSpeed = document.createElement("span");
    windSpeed.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
    windSpeed.classList = "list-group-item"

    currrentWeather.appendChild(temperature);

    currrentWeather.appendChild(humid);

    currrentWeather.appendChild(windSpeed);

    var lat = weather.coord.lat;
    var lon = weather.coord.lon;
    uvIndex(lat,lon);
};

// Latitude and Longitute
var uvIndex = function(lat, lon) {
    var futureURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`;
    fetch(futureURL)
    .then(function(response) {
        response.json().then(function(data) {
            // uvIndexDisplay(data)
        });
    });
};

var searchHandler = function(event) {
    var city = event.target.getAttribute("data-city")
    if (city) {
        cityWeather(city);
        fiveDay(city);
    }
};

cityForm.addEventListener("submit", submitForm);
searchList.addEventListener("click", searchHandler);