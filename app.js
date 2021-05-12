//GLOBAL VARIABLES 
const app_id = "dcf20c9d"
const app_key = "63a8264f3b792612479f31858dff2dd1"
let healthLabel = "soy-free"
let cuisineType = "indian"
let calories = "500-1000"
let recipeURL = `https://api.edamam.com/search?q=${healthLabel}&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course&cuisineType=${cuisineType}&calories=${calories}`
const healthLabelArray= ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']
const cuisineTypeArray = ['American', 'Asian', 'British', 'Caribbean', 'Chinese', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Nordic']
const caloriesArray = ["100-500", "500-1000", "1000-1500", "1500-2000"]
const dietaryRestriction = document.querySelector('#dietaryRestriction')
const cuisine = document.querySelector('#cuisine')
const calorieRange = document.querySelector('#calorieRange')

"comment"

//FUNCTIONS
function addDropDown(array, container){
    array.forEach(item => {
        let option = document.createElement('option')
        option.setAttribute("value", `${item}`)
        option.innerText = item
        container.append(option)
    })
}
addDropDown(cuisineTypeArray, cuisine)
addDropDown(healthLabelArray, dietaryRestriction)
addDropDown(caloriesArray, calorieRange)

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