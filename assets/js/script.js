var searchRecipes = function () {
    var response = fetch("https://api.spoonacular.com/recipes/random?apiKey=d4255eb84b16491988ecc48ddf8e72df")
        .then(function (response) {
            response.json().then(function (data) {
                console.log("random recipe", data);
            });
        });
}

searchRecipes();