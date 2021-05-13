//GLOBAL VARIABLES 
const app_id = "dcf20c9d"
const app_key = "63a8264f3b792612479f31858dff2dd1"
let healthLabel = "value"
let cultureType = "value"
let calories = "value"
// let recipeURL = `https://api.edamam.com/search?q=${healthLabel}&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course&cuisineType=${cultureType}&calories=${calories}`
const healthLabelArray= ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 'wheat-free', 'fat-free', 'low-sugar', 'egg-free', 'peanut-free', 'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']
const cuisineTypeArray = ['American', 'Asian', 'British', 'Caribbean', 'Chinese', 'French', 'Indian', 'Italian', 'Japanese', 'Kosher', 'Mediterranean', 'Mexican', 'Nordic']
const caloriesArray = ["100-500", "500-1000", "1000-1500", "1500-2000"]
const dietaryRestriction = document.querySelector('#dietaryRestriction')
const cuisine = document.querySelector('#cuisine')
const calorieRange = document.querySelector('#calorieRange')
const pickMeContainer = document.querySelector('.pickMeContainer')
// const dinnerOptions = []
const submitButton = document.querySelector('#submitCriteria')
const looksGood = document.querySelector('#looksGood')
const looksBad = document.querySelector('#looksBad')


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

function renderCard(object) {
    const div = document.createElement('div')
    div.setAttribute("class", "pickMeCard") 
    pickMeContainer.append(div)  

    const img = document.createElement('img')
    img.src = object.recipe.image
    div.append(img)

    const h3 = document.createElement('h3')
    h3.innerText = object.recipe.label
    div.append(h3)

    const a = document.createElement('a')
    a.innerText = "Click Here For the Recipe"
    a.href = object.recipe.shareAs
    div.append(a)
}

function newPickMe() {
    healthLabel = dietaryRestriction.value
    cultureType = cuisine.value
    calories = calorieRange.value
    let recipeURL = `https://api.edamam.com/search?q=${healthLabel}&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course&cuisineType=${cultureType}&calories=${calories}`
    const dinnerOptions = []
    fetch(recipeURL)
        .then(response => response.json())
        .then(results => {
            let resultHits = results.hits
            resultHits.forEach(hit => {
                dinnerOptions.push(hit)
            })
            renderCard(dinnerOptions[0])
        })
}    
//EVENT LISTENERS
submitButton.addEventListener('click', () => {
    if (healthLabel !== "value") {
        let removeCard = document.querySelector('.pickMeCard')
        removeCard.remove()
        newPickMe()  
    } else {
        newPickMe()
    }
})

let count = 1
looksBad.addEventListener('click', ()=> {
    healthLabel = dietaryRestriction.value
    cultureType = cuisine.value
    calories = calorieRange.value
    let recipeURL = `https://api.edamam.com/search?q=${healthLabel}&app_id=dcf20c9d&app_key=63a8264f3b792612479f31858dff2dd1&mealType=dinner&dishType=main%20course&cuisineType=${cultureType}&calories=${calories}`
    const dinnerOptions = []
    fetch(recipeURL)
    .then(response => response.json())
    .then(results => {
        let resultHits = results.hits
        resultHits.forEach(hit => {
            dinnerOptions.push(hit)
        })
        let removeCard = document.querySelector('.pickMeCard')
        removeCard.remove()
        renderCard(dinnerOptions[count])
        count= count +1
    })   
    
})
