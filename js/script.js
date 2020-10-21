
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




/*
drinks: Array(6)}
drinks: Array(6)
0:
dateModified: "2015-08-18 14:42:59"
idDrink: "11007"
strAlcoholic: "Alcoholic"
strCategory: "Ordinary Drink"
strCreativeCommonsConfirmed: "Yes"
strDrink: "Margarita"
strDrinkAlternate: null
strDrinkDE: null
strDrinkES: null
strDrinkFR: null
strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
strDrinkZH-HANS: null
strDrinkZH-HANT: null
strGlass: "Cocktail glass"
strIBA: "Contemporary Classics"
strIngredient1: "Tequila"
strIngredient2: "Triple sec"
strIngredient3: "Lime juice"
strIngredient4: "Salt"
strIngredient5: null
strIngredient6: null
strIngredient7: null
strIngredient8: null
strIngredient9: null
strIngredient10: null
strIngredient11: null
strIngredient12: null
strIngredient13: null
strIngredient14: null
strIngredient15: null
strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben."
strInstructionsES: null
strInstructionsFR: null
strInstructionsZH-HANS: null
strInstructionsZH-HANT: null
strMeasure1: "1 1/2 oz "
strMeasure2: "1/2 oz "
strMeasure3: "1 oz "
strMeasure4: null
strMeasure5: null
strMeasure6: null
strMeasure7: null
strMeasure8: null
strMeasure9: null
strMeasure10: null
strMeasure11: null
strMeasure12: null
strMeasure13: null
strMeasure14: null
strMeasure15: null
strTags: "IBA,ContemporaryClassic"
strVideo: null

*/