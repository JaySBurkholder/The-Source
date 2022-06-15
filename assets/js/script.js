// variables for querySearch
var apiKey = "apiKey=fb6493758b334242b9509ad7234d0216"
var query = "chicken"
var text1 = "https://api.spoonacular.com/recipes/complexSearch?query="
var text2 = query + "&" + apiKey;
var querySearch = text1.concat(text2);

console.log(querySearch);

// search for a recipe-type
var searchRecipeType = function () {
    var response = fetch(querySearch)
        .then(function (response) {
            response.json().then(function (data) {
                // console.log("chicken recipe", data);

                var recipeData = data
                // console.log(recipeData.results[0].id);
                // console.log(recipeData.results[0].title);
                // console.log(recipeData.results[0].image);


                // for (var i = 0; i < recipeData.length; i++) {
                //     console.log(recipeData.results[i]);
                // }

                for (const [keys, values] of Object.entries(recipeData.results[0])) {
                    console.log(`${keys}: ${values}`);
                }


                // console.log("recipe data", recipeData);
                // console.log("id", recipeData[0].id);
                // console.log("title", recipeData[0].title);
                // console.log("image", recipeData[0].image);
                // console.log("nutrients", recipeData[0].nutrients);
            });
        });


    localStorage.setItem('recipeType', response);
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
            response.json().then(function (data) {
                // console.log("specific recipe", data);
            });
        });

    localStorage.setItem('recipeData', response);
}

searchRecipeType();

searchRecipeData();


switch (taskDataObj.status) {
    case "Monday":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
      tasksToDoEl.append(listItemEl);
      break;
    case "Tuesday":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
      tasksInProgressEl.append(listItemEl);
      break;
    case "Wednseday":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
      tasksCompletedEl.append(listItemEl);
      break;
      case "Thursday":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
      tasksToDoEl.append(listItemEl);
      break;
      case "Friday":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
      tasksToDoEl.append(listItemEl);
      break;
    default:
      console.log("Something went wrong!");
  }