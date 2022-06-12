// variables for querySearch
var apiKey = "apiKey=d4255eb84b16491988ecc48ddf8e72df"
var query = "chicken"
var text1 = "https://api.spoonacular.com/recipes/complexSearch?query="
var text2 = query + "&" + apiKey;
var querySearch = text1.concat(text2);

console.log(querySearch);

// search for a recipe-type
var searchRecipeType = function () {
    var response = fetch(querySearch)
        .then(function (response) {
            response.json().then(function (data1) {
                console.log("chicken recipe", data1);
            });
        });
}

// variables for userSearch
var queryId = "654959";
var text3 = "https://api.spoonacular.com/recipes/";
var text4 = "/ingredientWidget.json?";
var newText1 = text3 + queryId;
var newText2 = text4 + apiKey;
var userSearch = newText1.concat(newText2);

console.log(userSearch);


// search a recipe by id
var searchRecipeData = function () {
    var response = fetch(userSearch)
        .then(function (response) {
            response.json().then(function (data2) {
                console.log("specific recipe", data2);
            });
        });
}

searchRecipeType();

searchRecipeData();
