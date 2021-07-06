# What's for Dinner
> Your personal taste-maker for dinner tonight!

## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General-Info
What's for Dinner is an application that helps you decide what to eat for dinner tonight. You'll have the opportunity to select from three criteria: Dietary Restriction, Cuisine Type, and Calorie Range. Once you've made your selections, our application will generate a recipe for you to try. Don't like the recipe? You can select another by using the appropriate button. Happy Eating!

## Technologies
* JavaScript
* CSS
* HTML
* [Edamam API](https://developer.edamam.com/edamam-docs-recipe-api)

## Setup
To run this project, you'll need to install it locally by cloning the GitHub repository via 
```
$ git clone git@github.com:${your_name_here}/WhatsForDinner.git
```
Please note that ${your_name_here} should be replaced with your personal git hub account name. 

## Code Examples
```javascript
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
```

## Features
* Personalize your recommendation using criteria
* Return a recipe that's right for you
* Choose to follow the recipe to it's appropriate page
* Choose another recipe if the first isn't right for you

To-do list:
* Enable "none" or "any" options for criteria
* Add a "like" button
* Be able to search for cuisine types with spaces. IE. "Middle Eastern"

## Status
Project is: finished. API limit is 10 hits per minute

## Inspiration
Both Chelsea and Mandy love to cook! So they let their passion for food guide them to this recipe generator. 

## Contact

Created by [Mandy Parson](https://www.linkedin.com/in/mandy-parson/) and [Chelsea Santos](https://www.linkedin.com/in/mchelseasantos/) 

Feel free to reach out to [us](mailto:mandykparson@gmail.com)!




