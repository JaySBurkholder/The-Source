var submit = document.getElementById("submit");


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

                console.log("chicken recipe", data);

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

            });
        });

}

searchRecipeType();
getDetails();





// // variables for userSearch
// var queryId = "654959";
// var text3 = "https://api.spoonacular.com/recipes/";
// var text4 = "/ingredientWidget.json?";
// var newText1 = text3 + queryId;
// var newText2 = text4 + apiKey;
// var userSearch = newText1.concat(newText2);

// console.log(userSearch);

<<<<<<< HEAD
searchRecipeData();
=======

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


>>>>>>> 5bb078423ba17a6e7869b93acecf89bef8a5ebdc


// switch (taskDataObj.status) {
//     case "Monday":
<<<<<<< HEAD
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
//       tasksToDoEl.append(listItemEl);
//       break;
//     case "Tuesday":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
//       tasksInProgressEl.append(listItemEl);
//       break;
//     case "Wednseday":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
//       tasksCompletedEl.append(listItemEl);
//       break;
//       case "Thursday":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 3;
//       tasksToDoEl.append(listItemEl);
//       break;
//       case "Friday":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 4;
//       tasksToDoEl.append(listItemEl);
//       break;
//     default:
//       console.log("Something went wrong!");
//   }
=======
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
>>>>>>> 5bb078423ba17a6e7869b93acecf89bef8a5ebdc
