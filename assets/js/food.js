document.getElementById("submit").onclick = function () {
    var name = document.getElementById("recipeSearch").value;
    console.log("search", name);

    // search variable to call api
    var querySearch = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=fb6493758b334242b9509ad7234d0216`

    searchRecipeType(querySearch);

}

var recipeDataId = 0

// first api call that searches a type of recipe (pulls recipe id that we will use in next call)
var searchRecipeType = async function (querySearch) {
    var response = await fetch(querySearch)
        .then(function (response) {
            response.json().then(function (recipeData) {
                var someResults = recipeData.results.slice(0, 5);
                // add to list
                addToList(someResults);

            })

            // getDetails(mealObj);
        });
}

var addToList = function (resultData) {
    // var id = resultData.results[0].id;
    // var title = resultData.results[0].title;
    // var image = resultData.results[0].image;

    // console.log(resultData);

    var mealObjArr = [];

    for (i = 0; i < resultData.length; i++) {
        var id = resultData[i].id;
        var title = resultData[i].title;

        var mealObj = {
            "mealId": id,
            "mealTitle": title,
        };

        mealObjArr.push(mealObj);
    }

    displayMeal(mealObjArr);
    // getDetails(mealObjArr);
}

// storing <ul> with id="results" in variables
var resultsList = document.getElementById("results");
var listResultEl = document.createElement("li");
var selectEl2 = document.createElement("select");
var myFunction = function () {
    var x = document.getElementById("mySelect").value;
    console.log(x);
}

var selectOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var displayMeal = function (mealArr) {
    for (i = 0; i < mealArr.length; i++) {
        // defining list variables
        var resultsTitle = mealArr[i].mealTitle;
        var resultsId = mealArr[i].mealId;

        // defining id of list item and innerhtml text
        var listResultEl = document.createElement("li");
        listResultEl.setAttribute("id", resultsId);
        listResultEl.innerHTML = resultsTitle;

        // append list item to list
        resultsList.appendChild(listResultEl);

        // select element item
        var selectEl2 = document.createElement("select");
        selectEl2.setAttribute("id", "mySelect");
        selectEl2.setAttribute("onchange", "=myFunction()");
        listResultEl.appendChild(selectEl2);

        for (j = 0; j < selectOptions.length; j++) {
            var optionsText = selectOptions[j];
            // creating option element
            var optionEl = document.createElement("option");
            optionEl.setAttribute("value", optionsText);
            optionEl.textContent = optionsText;
            selectEl2.appendChild(optionEl);

        }

    }
}

// selectEl2.addEventListener('change', function (event) {
//     console.log(selectEl2.value);
// });

const updateButton = document.getElementById('submit');
const favDialog = document.getElementById('favRecipe');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');
const closeBtn = document.getElementById('closeBtn');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== 'function') {
    favDialog.hidden = true;

}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', function onOpen() {
    if (typeof favDialog.showModal === "function") {
        favDialog.showModal();
    } else {
        outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
    }
});
//"Favorite animal" input sets the value of the confirm button
selectEl2.addEventListener('change', function onSelect(e) {
    confirmBtn.value = selectEl2.value;
    console.log(confirmBtn.value)
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', function onClose() {
    // outputBox.value = favDialog.returnValue + " button clicked - " + (new Date()).toString();
});



// var getDetails = function (details) {
//     var id = details[0].mealId;
//     // console.log(details);
//     // // console.log(id);


//     // decalring variables for second api call
//     const userSearch = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=fb6493758b334242b9509ad7234d0216`;

//     // second api call to pull instructions for meal
//     var details = fetch(userSearch)
//         .then(function (details) {
//             details.json().then(function (recipe) {

//                 // create array of our ingredient objects
//                 var ingredientsList = recipe.ingredients.map(function (ingredient) {
//                     return { ingredient, amount: ingredient.amount.us }
//                 })

//                 console.log(ingredientsList);


//                 // send our list of ingredients to local stroage
//                 localStorage.setItem("recipe", JSON.stringify(ingredientsList));

//                 createRecipeEl(ingredientsList);


//             });
//         });
// }

// var createRecipeEl = function (ingredientsList) {
//     for (var i = 0; i < ingredientsList.length; i++) {
//         var nameIngredient = ingredientsList[i].ingredient.name;
//         var amountIngredient = ingredientsList[i].ingredient.amount.us.value + ingredientsList[i].ingredient.amount.us.unit;

//         // select mealList in html
//         // var listId = document.getElementById("")
//         var mealList = document.getElementById("mon");

//         // create listItem and set content
//         var listItemEl = document.createElement("li");
//         listItemEl.innerHTML = nameIngredient + " (" + amountIngredient + ")";

//         mealList.appendChild(listItemEl);
//     }
// }

// var loadRecipes = function () {
//     var savedReipes = localStorage.getItem("recipe");

//     if (!savedReipes) {
//         return false;
//     }

//     savedReipes = JSON.parse(savedReipes);
// }


// loadRecipes();































































/* old for loop */
    // loop through object pulled from api and append title to page
    //  for (i = 0; i < someResults.length; i++) {
    //     var someResultsTitle = someResults[i].title;

    //     var showResults = document.getElementById("results");


    //     var listResultEl = document.createElement("li");
    //     listResultEl.setAttribute("id", recipeDataId);
    //     listResultEl.innerHTML = someResultsTitle;

    //     var resultInfoEl = document.createElement("div");


    //     var selectEl = document.createElement("select");
    //     selectEl.setAttribute("id", recipeDataId);
    //     var selectOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    //     for (i = 0; i < selectOptions.length; i++) {
    //         var optionEl = document.createElement("option");
    //         optionEl.textContent = selectOptions[i];
    //         optionEl.setAttribute("value", selectOptions[i]);

    //         selectEl.appendChild(optionEl);
    //     }


    //     listResultEl.appendChild(selectEl);

    //     resultInfoEl.appendChild(listResultEl);
    //     showResults.appendChild(resultInfoEl);

    //     recipeDataId++


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

    // const text4 = "/ingredientWidget.json?";
    // const newText1 = text3;
    // const newText2 = text4 + apiKey;
    // // adding variables together to make the api all
    // const idk = newText1.concat(newText2);

    // document.querySelector("data-recipe-id").onclick = function () {
//     console.log("you clicked a recipe");
// }

    // const text4 = "/ingredientWidget.json?";
    // const newText1 = text3;
    // const newText2 = text4 + apiKey;
    // // adding variables together to make the api all
    // const idk = newText1.concat(newText2);

                    // var title = someResults[0].title;
                // var cardHeader = document.getElementById("mealName");
                // cardHeader.innerHTML = title;
                // console.log(title);