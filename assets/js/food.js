  function getsource(id){
    $.ajax({
      url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=f0d97127e9c84932ad19b3b3239929af",
      success: function(res){
        document.getElementById("sourceLink").innerHTML=res.sourceUrl
        document.getElementById("sourceLink").href=res.sourceUrl
      }
    });
  }
  
function getrecipe(q){
  $.ajax({
    url:"https://api.spoonacular.com/recipes/search?apiKey=f0d97127e9c84932ad19b3b3239929af&number=5",
    success: function(res){
        for (let i = 0; i < 5; i++)
    document.getElementById("output").apprend(
        $("<div>").innerHTML=innerHTML="<h1>"+res.results[i].title+"</h1><br><img src='"+res.baseUri+res.results[i].image+"'width='100'/><br> ready in "+res.results[i].readyInMinutes+" minutes"
    .getsource(res.results[i].id)
    )
   }
  }

// const searchForm = document.querySelector("form");
// const searchResultDiv = document.querySelector(".search-result");
// const container = document.querySelector(".container");
// let searchQuery = "";
// const APP_ID = "Use Your Own App ID Here";
// const APP_key = "c303a20285744f93b59a3e48d801c745";
// // console.log(container)
// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   searchQuery = e.target.querySelector("input").value;
//   fetchAPI();
// });

// async function fetchAPI() {
//   const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=c303a20285744f93b59a3e48d801c745${APP_key}&from=0&to=20`;
//   const response = await fetch(baseURL);
//   const data = await response.json();
//   generateHTML(data.hits);
//   console.log(data);
// }

// function generateHTML(results) {
//   container.classList.remove("initial");
//   let generatedHTML = "";
//   results.map((result) => {
//     generatedHTML += `
//       <div class="item">
//         <img src="${result.recipe.image}" alt="img">
//         <div class="flex-container">
//           <h1 class="title">${result.recipe.label}</h1>
//           <a class="view-btn" target="_blank" href="${
//             result.recipe.url
//           }">View Recipe</a>
//         </div>
//         <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
//         <p class="item-data">Diet label: ${
//           result.recipe.dietLabels.length > 0
//             ? result.recipe.dietLabels
//             : "No Data Found"
//         }</p>
//         <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
//       </div>
//     `;
//   });
//   searchResultDiv.innerHTML = generatedHTML;
// }






// document.getElementById("submit").onclick = function () {
//     var name = document.getElementById("recipeSearch").value;
//     console.log("search", name);

//     // search variable to call api
//     var querySearch = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=c303a20285744f93b59a3e48d801c745`

//     searchRecipeType(querySearch);

// }

// var recipeDataId = 0

// // first api call that searches a type of recipe (pulls recipe id that we will use in next call)
// var searchRecipeType = async function (querySearch) {
//     var response = await fetch(querySearch)
//         .then(function (response) {
//             response.json().then(function (recipeData) {
//                 var someResults = recipeData.results.slice(0, 5);

//                 for (i = 0; i < someResults.length; i++) {
//                     var someResultsTitle = someResults[i].title;

//                     var showResults = document.getElementById("showResults");

//                     var listResultEl = document.createElement("li");
//                     listResultEl.setAttribute("recipe-data-id", recipeDataId)
//                     listResultEl.innerHTML = someResultsTitle;

//                     var resultInfoEl = document.createElement("div");

//                     resultInfoEl.appendChild(listResultEl);
//                     showResults.appendChild(resultInfoEl);

//                     recipeDataId++


//                 }


//                 var id = recipeData.results[0].id;
//                 var title = recipeData.results[0].title;
//                 var image = recipeData.results[0].image;

//                 var mealObj = {
//                     "mealId": id,
//                     "mealtitle": title,
//                     "mealImage": image
//                 };

//                 getDetails(mealObj);
//             });
//         });
// }

// var getDetails = async function (details) {
//     var id = details.mealId;

//     // decalring variables for second api call
//     const userSearch = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=c303a20285744f93b59a3e48d801c745`;

//     // second api call to pull instructions for meal
//     var details = await fetch(userSearch)
//         .then(function (details) {
//             details.json().then(function (recipe) {

//                 // create array of our ingredient objects
//                 var ingredientsList = recipe.ingredients.map(function (ingredient) {
//                     return { ingredient, amount: ingredient.amount.us }
//                 })


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

//         var mealList = document.getElementById("mealList");

//         var listItemEl = document.createElement("li");

//         var recipeInfoEl = document.createElement("div");

//         listItemEl.innerHTML = nameIngredient + " (" + amountIngredient + ")";

//         recipeInfoEl.appendChild(listItemEl);

//         mealList.appendChild(recipeInfoEl);
//     }
// }

// var loadRecipes = function () {
//     var savedReipes = localStorage.getItem("recipe");

//     if (!savedReipes) {
//         return false;
//     }

//     savedReipes = JSON.parse(savedReipes);
// }


// const searchInput = document.querySelector("[data-search]")

// searchInput.addEventListener("Input", e => {
//     const value = e.target.value
//     console.log(value)
// })



// loadRecipes();

// searchRecipeType();

// getDetails();


// searchRecipeData();





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

// function search_food() {
//     let input = document.getElementById('searchbar').value
//     // input=input.toLowerCase();
//     let x = document.getElementsByClassName('food');
      
    // for (i = 0; i < x.length; i++) { 
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //         x[i].style.display="none";
    //     }        }
    // }

