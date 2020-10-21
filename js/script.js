
// Constants
// const { openDrinkAPIKey } = CONFIG;
const API_KEY = '1';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

let drinkData, userInput;


// Variables

// Cached Element References

const $cocktail = $('#Cocktail');
const $ingredients = $('#Ingredients');
const $glass = $('#Glass');
const $instructions = $('#Instructions');
const $form = $('form');
const $input = $('input[type="text"]');
const $card1 = $('#card1');
const $card2 = $('#card2');
const $card3 = $('#card3');
const $modal = $('#modal');




// Event Listeners
$form.on('submit', handleSubmit);
$card1.on('click', getSazerac);
$card2.on('click', getMojito);
$card3.on('click', getNegroni);


// Functions

function handleSubmit(event) {
    event.preventDefault();
    let userInput = $input.val();
    // if(!userInput) return;
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
    .then(
        function (data) {
            console.log(data);
    
            drinkData = data.drinks;
            render();
        }, 
        function (error) {
            console.log('Error', error);
        }
    );
}

function getSazerac(event) {
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sazerac')
    .then(
        function (data) {
            console.log(data);
    
            drinkData = data.drinks;
            render();
        }, 
        function (error) {
            console.log('Error', error);
        }
    );
}

function getMojito(event) {
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(
        function (data) {
            console.log(data);
    
            drinkData = data.drinks;
            render();
        }, 
        function (error) {
            console.log('Error', error);
        }
    );
}

function getNegroni(event) {
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni')
    .then(
        function (data) {
            console.log(data);
    
            drinkData = data.drinks;
            render();
        }, 
        function (error) {
            console.log('Error', error);
        }
    );
}


function render() {
    $cocktail.text('Cocktail:  ' + drinkData[0].strDrink);

    $ingredients.text(`Ingredients: ${drinkData[0].strMeasure1 != null? drinkData[0].strMeasure1 : ''} 
    ${drinkData[0].strIngredient1 != null? drinkData[0].strIngredient1 : ''} 
    ${drinkData[0].strMeasure2 != null? drinkData[0].strMeasure2 : ''} 
    ${drinkData[0].strIngredient2 != null? drinkData[0].strIngredient2 : ''} 
    ${drinkData[0].strMeasure3 != null? drinkData[0].strMeasure3 : ''} 
    ${drinkData[0].strIngredient3 != null? drinkData[0].strIngredient3 : ''} 
    ${drinkData[0].strMeasure4 != null? drinkData[0].strMeasure4 : ''} 
    ${drinkData[0].strIngredient4 != null? drinkData[0].strIngredient4 : ''} 
    ${drinkData[0].strMeasure5 != null? drinkData[0].strMeasure5 : ''} 
    ${drinkData[0].strIngredient5 != null? drinkData[0].strIngredient5 : ''} 
    ${drinkData[0].strMeasure6 != null? drinkData[0].strMeasure6 : ''} 
    ${drinkData[0].strIngredient6 != null? drinkData[0].strIngredient6 : ''} 
    ${drinkData[0].strMeasure7 != null? drinkData[0].strMeasure7 : ''} 
    ${drinkData[0].strIngredient7 != null? drinkData[0].strIngredient7 : ''}`);
    
    $glass.text('Glass:  ' + drinkData[0].strGlass);
    $instructions.text('How to make: ' + drinkData[0].strInstructions);
}
