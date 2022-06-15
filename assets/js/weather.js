// // weather api info
// var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
// var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
// // var userLocation = function()


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
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });



// function = callLocationAPI(data){
//     // call other api with data
// }


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


// // user input field for location data


// // putting json data into html
// function = makeHTMLwithData() {
//     for loop, each loop
//     var forecast = document.createElement('div')
//     // forecast.innerHTML = weatherinfo
//     document.querySelector().append(forecast)


// }

// fetch()
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });




    // field descriptions

// {
// "data":[
//     lat:
//     long:
//     city_name:
//     country_code:
//     state_code:
//     wind_spd:
//     weather: {
//         icon:Weather icon code.
//         code:Weather code.
//         description: Text weather description.
//         }
// }
// ],
// "minutely":[...],
// "count":1

// }