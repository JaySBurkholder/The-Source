// variables for querySearch
var apiKey = "apiKey=d4255eb84b16491988ecc48ddf8e72df"
var query = "chicken"
var text1 = "https://api.spoonacular.com/recipes/complexSearch?query="
var text2 = query + "&" + apiKey;
// adding variables together to make api call
var querySearch = text1.concat(text2);

// first api call that searches a type of recipe (pulls recipe id that we will use in next call)
var searchRecipeType = function () {
    var response = fetch(querySearch)
        .then(function (response) {
            response.json().then(function (recipeData) {

                var id = recipeData.results[0].id;
                var title = recipeData.results[0].title;
                var image = recipeData.results[0].image;

                var mealObj = {
                    "mealId": id,
                    "mealtitle": title,
                    "mealImage": image
                };

                // console.log(mealObj);

                getDetails(mealObj);
            });
        });
}

var getDetails = function (details) {
    const id = details.mealId;

    // console.log(id);

    // decalring variables for second api call
    const text3 = `https://api.spoonacular.com/recipes/${id}`;
    const text4 = "/ingredientWidget.json?";
    const newText1 = text3;
    const newText2 = text4 + apiKey;
    // adding variables together to make the api all
    const userSearch = newText1.concat(newText2);

    // second api call to pull instructions for meal
    var details = fetch(userSearch)
        .then(function (details) {
            details.json().then(function (recipe) {
                // console.log(data);
                // console.log(recipe.ingredients);

                // create array of our ingredient objects
                var ingredientsList = recipe.ingredients.map(function (ingredient) {
                    return { ingredient, amount: ingredient.amount.us }
                })

                // console.log(ingredientsList);


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

        listItemEl.innerHTML = nameIngredient + amountIngredient;

        recipeInfoEl.appendChild(listItemEl);

        mealList.appendChild(recipeInfoEl);
    }
    // console.log(ingredientsList);
    // console.log(ingredientsList[0].ingredient);




    // var mealList = document.getElementById("mealList");

    // var listItemEl = document.createElement("li");

    // var recipeInfoEl = document.createElement("div");

    // ingredientsList = JSON.stringify(ingredientsList);
    // var ingredientName = savedReipes.ingredient.name;

}

var loadRecipes = function () {
    var savedReipes = localStorage.getItem("recipe");

    if (!savedReipes) {
        return false;
    }

    savedReipes = JSON.parse(savedReipes);

    console.log(savedReipes);

    // for (i = 0; i < savedReipes.length; i++) {
    //     createRecipeEl(savedReipes[i]);
    // }

}



loadRecipes();

searchRecipeType();

getDetails();


<<<<<<< HEAD
searchRecipeData();
=======






>>>>>>> develop


// switch (taskDataObj.status) {
//     case "Monday":
//         taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
//         tasksToDoEl.append(listItemEl);
//         break;
//     case "Tuesday":
//         taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
//         tasksInProgressEl.append(listItemEl);
//         break;
//     case "Wednseday":
//         taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
//         tasksCompletedEl.append(listItemEl);
//         break;
//     case "Thursday":
//         taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 3;
//         tasksToDoEl.append(listItemEl);
//         break;
//     case "Friday":
//         taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 4;
//         tasksToDoEl.append(listItemEl);
//         break;
//     default:
//         console.log("Something went wrong!");
// }





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