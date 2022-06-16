// ====>user input
// ====>data gets sent to geo api
// ====>geo api returns data
// ====>that data gets put into function var=userLocation
// ====>userLocation gets concatenated into fetch function for weather api
// ====>weather api returns data
// ====>data goes into HTML


    
// Submit location info form
document.getElementById("cityInputField").onclick = function() {
    var cityName = document.getElementById("userInput").value;
    console.log(cityName)
}



// geolocation API info
var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?"
var locationKey = "apiKey=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"

// ===>
// city name results from input form
var cityName = function() {
    document.getElementById("userInput").value;
};

// ===>
// encode the string input values from cityName
    encodeURIComponent(cityName);

// ===>
// calling location API
fetch(requestLocationURL + "&" + cityName + "&" + locationKey)
    .then(function(response) {
        return response.json();
    })
        .then(function (locationData) {
                console.log(locationData);
        })
            .catch(error => {
                    console.log("an error occurred, please try again")
            // })

    // pull long/lat id from array inside of locationData
                .then(function (response) {
                    response.json().then(function(longLat) {
                    var id=longLat.results[0].id;

                    var longLatObj = {
                        // whatever id longitude and latitude are defined as in the JSON data :id
                    }

    });




// this is the variable where the long/lat coming back from the first API will be stored
var userLocation = function() {
    // myptv api needs to convert this info to lat/long
    // myptv api needs to send lat/long to weatherbit api   
    // weatherbit api needs to concatenate var userLocation into fetch request
}




// weather api info
var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
// var userLocation = function()
// + '&' + userLocation

// // fetch weather data
fetch(requestWeatherURL + weatherKey)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(error => {
        console.log("an error occurred, please try again")
    });




// // putting json data into html
// function = makeHTMLwithData() {
//     for loop, each loop
//     var forecast = document.createElement('div')
//     // forecast.innerHTML = weatherinfo
//     document.querySelector('#forecast').append(forecast)
// });

