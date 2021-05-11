//GLOBAL VARIABLES 
const app_id = "dcf20c9d"
const app_key = "63a8264f3b792612479f31858dff2dd1"
let healthLabel = "soy-free"
let cuisineType = "american"
let calories = "500-1000"
let recipeURL = `https://api.edamam.com/search?q=${healthLabel}&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course&cuisineType=${cuisineType}&calories=${calories}`

// //This one works
// https://api.edamam.com/search?q=Soy-Free&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1

https://api.edamam.com/search?q=Soy-Free&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course



//FUNCTIONS

//FETCHES
fetch(recipeURL)
    .then(response => response.json())
    .then(results => {
        let resultList = results.hits
        resultList.forEach(result => {
            console.log(result.recipe.label)
        })
    })

//EVENT LISTENERS