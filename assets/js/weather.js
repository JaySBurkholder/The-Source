// weather api info
var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
// var userLocation = function()


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


// geolocation API info
var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?"
var locationKey = "apiKey=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"

// search city name results from input form
var cityName = function() {
    document.getElementById("userInput").value;
}

// encode the string input values in cityName
    encodeURIComponent(cityName);

// calling location API
// + cityName + "&"
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
                // .then(function(longLat) {
                //     var id=longLat.results[0].id;

                //     var longLat = {

                //     }

    });


    
    // Submit location info form
    // const submit = document.getElementById('submit');
    
    // submitCity.addEventListener('keyup', (e) + {

    // });
    document.getElementById("cityInputField").onclick = function() {
        var cityName = document.getElementById("userInput").value;
        console.log(cityName)

    }


    // function input_location() {
    //     var input = document.getElementById('searchbar').value 

    //     var cityName = document.getElementsByClassName('city_name');
    //     console.log(cityName)
    // } 


    // = var searchText



    // pull long/lat id from array inside of locationData






var userLocation = function() {
    // need to have user input send city name to myptv api
    // myptv api needs to convert this info to lat/long
    // myptv api needs to send lat/long to weatherbit api
    // weatherbit api needs to concatenate var userLocation into fetch request
}






// // putting json data into html
// function = makeHTMLwithData() {
//     for loop, each loop
//     var forecast = document.createElement('div')
//     // forecast.innerHTML = weatherinfo
//     document.querySelector('#forecast').append(forecast)
// }




// ====>user input
// ====>data gets sent to geo api
// ====>geo api returns data
// ====>that data gets put into function var=userLocation
// ====>userLocation gets concatenated into fetch function for weather api
// ====>weather api returns data
// ====>data goes into HTML
// ====>
// ====>
