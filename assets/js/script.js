// variables for querySearch
var apiKey = "apiKey=fb6493758b334242b9509ad7234d0216"
var query = "chicken"
var text1 = "https://api.spoonacular.com/recipes/complexSearch?query="
var text2 = query + "&" + apiKey;
var querySearch = text1.concat(text2);

// console.log(querySearch);

// search for a recipe-type
var searchRecipeType = function () {
    var response = fetch(querySearch)
        .then(function (response) {
            response.json().then(function (data) {

                // console.log("chicken recipe", data);

                var recipeData = data
                var id = recipeData.results[0].id;
                var title = recipeData.results[0].title;
                var image = recipeData.results[0].image;

                var mealObj = {
                    "mealId": id,
                    "mealtitle": title,
                    "mealImage": image
                };


                getDetails(mealObj);

                // for (var i = 0; i < recipeData.length; i++) {
                //     console.log(recipeData.results[i]);
                // }

                // for (const [keys, values] of Object.entries(recipeData.results[0])) {
                //     console.log(`${keys}: ${values}`);
                // }




                // console.log("recipe data", recipeData);
                // console.log("id", recipeData[0].id);
                // console.log("title", recipeData[0].title);
                // console.log("image", recipeData[0].image);
                // console.log("nutrients", recipeData[0].nutrients);
            });
        });
}

var getDetails = function (details) {
    var id = details.mealId;



    var text3 = `https://api.spoonacular.com/recipes/${id}`;
    var text4 = "/ingredientWidget.json?";
    var newText1 = text3;
    var newText2 = text4 + apiKey;
    var userSearch = newText1.concat(newText2);

    var details = fetch(userSearch)
        .then(function (details) {
            details.json().then(function (data) {
                console.log(data);

            })



        })

}





// // variables for userSearch
// var queryId = "654959";
// var text3 = "https://api.spoonacular.com/recipes/";
// var text4 = "/ingredientWidget.json?";
// var newText1 = text3 + queryId;
// var newText2 = text4 + apiKey;
// var userSearch = newText1.concat(newText2);

// console.log(userSearch);


// search a recipe by id
// var searchRecipeData = function () {
//     var response = fetch(userSearch)
//         .then(function (response) {
//             response.json().then(function (data) {
//                 // console.log("specific recipe", data);

//                 var recipe = data;

//                 // iterate(recipe);
//             });
//         });

//     localStorage.setItem('recipeData', response);
// }

searchRecipeType();

// searchRecipeData();
