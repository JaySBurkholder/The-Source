var weatherKey = "key=a937108d6e62439e97d0d01f06886bd6"
var requestWeatherURL = "https://api.weatherbit.io/v2.0/current?";
var query = "city_name"

fetch(requestWeatherURL + weatherKey)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });



// var requestLocationURL = 
// var locationKey =


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