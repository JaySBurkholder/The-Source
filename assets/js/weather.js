// // weather api info
// var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
// var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
// // var userLocation = function()


<<<<<<< HEAD
// // // fetch weather data
// fetch(requestWeatherURL + weatherKey)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });


// geolocation API info
var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?"
var locationKey = "Key=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"

// calling location API
fetch(requestLocationURL + locationKey)
=======
// // fetch weather data
fetch(requestWeatherURL + weatherKey)
>>>>>>> JayBurkholder
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(error => {
        console.log("an error occurred, please try again")
    });


<<<<<<< HEAD
    const submit = document.getElementById('submit');
    
    submit.addEventListener('keyup', (e) + {
        

    });



// // geolocation API info
// var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?"
// var locationKey = "Key=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"
=======
// geolocation API info
var requestLocationURL = "https://api.myptv.com/geocoding/v1/locations/by-text?searchText="
var locationKey = "apiKey=ZTUyNDk1MDAxYjYzNGRjNWE4OWM1Njg4ZTg5NjFhNmQ6MzRiZTdkNGItMWJiNC00NWI0LTkxZmEtNThlNzA5NmNiZGEw"
// search text results from input form
var searchText = function()
>>>>>>> JayBurkholder

// encode the string input values in searchText
function(encodeSearchText){
    encodeURIComponent(searchText)
});

// calling location API
fetch(requestLocationURL + searchText + "&" + locationKey)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(error => {
        console.log("an error occurred, please try again")
    });


    
    // Submit location info form
    const submit = document.getElementById('submit');
    
    submit.addEventListener('keyup', (e) + {

    });
    // = var searchText



<<<<<<< HEAD

// // // sending location API data to weather API
// // fetch(requestWeatherURL + weatherKey + '&' + userLocation)
// // .then(response => {
// //     // handle the response
// //     callLocationAPI()
// // })
// // .catch(error => {
// // // handle the error
// // console.log("an error ocurred")
// // }
=======
var userLocation = function() {
    // need to have user input send city name to myptv api
    // myptv api needs to convert this info to lat/long
    // myptv api needs to send lat/long to weatherbit api
    // weatherbit api needs to concatenate var userLocation into fetch request
}


>>>>>>> JayBurkholder




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
