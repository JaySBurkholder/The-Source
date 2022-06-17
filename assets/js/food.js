document.getElementById("submit").onclick = function () {
    var name = document.getElementById("recipeSearch").value;
    console.log("search", name);

    // search variable to call api
    var querySearch = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=c303a20285744f93b59a3e48d801c745`

    searchRecipeType(querySearch);

}


// variables for querySearch

// first api call that searches a type of recipe (pulls recipe id that we will use in next call)
var searchRecipeType = async function (querySearch) {
    var response = await fetch(querySearch)
        .then(function (response) {
            response.json().then(function (recipeData) {
                var someResults = recipeData.results.slice(0, 5);

                for (i = 0; i < someResults.length; i++) {
                    var someResultsTitle = someResults[i].title;

                    var showResults = document.getElementById("showResults");

                    var listResultEl = document.createElement("li");
                    listResultEl.innerHTML = someResultsTitle;

                    var resultInfoEl = document.createElement("div");

                    resultInfoEl.appendChild(listResultEl);
                    showResults.appendChild(resultInfoEl);


                }

                // console.log(results.title[0]);


                var id = recipeData.results[0].id;
                var title = recipeData.results[0].title;
                var image = recipeData.results[0].image;

                var mealObj = {
                    "mealId": id,
                    "mealtitle": title,
                    "mealImage": image
                };

                getDetails(mealObj);
            });
        });
}

var getDetails = async function (details) {
    var id = details.mealId;

    // decalring variables for second api call
    const userSearch = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=c303a20285744f93b59a3e48d801c745`;
    // const text4 = "/ingredientWidget.json?";
    // const newText1 = text3;
    // const newText2 = text4 + apiKey;
    // // adding variables together to make the api all
    // const idk = newText1.concat(newText2);

    // second api call to pull instructions for meal
    var details = await fetch(userSearch)
        .then(function (details) {
            details.json().then(function (recipe) {

                // create array of our ingredient objects
                var ingredientsList = recipe.ingredients.map(function (ingredient) {
                    return { ingredient, amount: ingredient.amount.us }
                })


                // send our list of ingredients to local stroage
                localStorage.setItem("recipe", JSON.stringify(ingredientsList));

                createRecipeEl(ingredientsList);


            });
        });
}

var createRecipeEl = function (ingredientsList) {
    for (var i = 0; i < ingredientsList.length; i++) {
        var nameIngredient = ingredientsList[i].ingredient.name;
        var amountIngredient = ingredientsList[i].ingredient.amount.us.value + ingredientsList[i].ingredient.amount.us.unit;

        var mealList = document.getElementById("mealList");

        var listItemEl = document.createElement("li");

        var recipeInfoEl = document.createElement("div");

        listItemEl.innerHTML = nameIngredient + " (" + amountIngredient + ")";

        recipeInfoEl.appendChild(listItemEl);

        mealList.appendChild(recipeInfoEl);
    }
}

var loadRecipes = function () {
    var savedReipes = localStorage.getItem("recipe");

    if (!savedReipes) {
        return false;
    }

    savedReipes = JSON.parse(savedReipes);
}

loadRecipes();

getDetails();













// old for loop
// for (var i = 0; i < recipe.ingredients.length; i++) {
//     var ingredients = recipe.ingredients[i];
//     var amount = recipe.ingredients[i].amount.us;

//     var mealInstructions = {
//         "ingredients": ingredients,
//         "amount": amount
//     }


//     ingredientsList.push(mealInstructions);


//     console.log(ingredientsList);


// }

//  var fileReader = new FileReader();

//     var imageEl = document.createElement("img");
// imageEl.setAttribute("src", fileReader);

// console.log(imageEl);

// var image = ingredientsList[0].ingredient.image;
// console.log(image);

// listItemEl.appendChild(imageEl);


    // console.log(ingredientsList);
    // console.log(ingredientsList[0].ingredient);




    // var mealList = document.getElementById("mealList");

    // var listItemEl = document.createElement("li");

    // var recipeInfoEl = document.createElement("div");

    // ingredientsList = JSON.stringify(ingredientsList);
    // var ingredientName = savedReipes.ingredient.name;

// console.log(savedReipes);

    // for (i = 0; i < savedReipes.length; i++) {
    //     createRecipeEl(savedReipes[i]);
    // }


// var recipeTitleEl = function (mealObj) {
//     console.log(mealObj.titleName);
// }


// recipeTitleEl();

// console.log(data);
// console.log(recipe.ingredients);

// console.log(ingredientsList);

// console.log(id);

// console.log(mealObj);

//function () {
//     document.getElementById("recipeSearch").value;
// }

// var apiKey = "apiKey=fb6493758b334242b9509ad7234d0216"
// var query = "chicken";
// var text1 = "https://api.spoonacular.com/recipes/complexSearch?query="
// var text2 = query + "&" + apiKey;
// // adding variables together to make api call
// var querySearch2 = text1.concat(text2);