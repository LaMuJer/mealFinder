const service = document.getElementById('service'),
meal = document.getElementById('meal'),
fish = document.getElementById('fish'),
drink = document.getElementById('drink'),
pizza = document.getElementById('pizza'),
chicken = document.getElementById('chicken') ; 

// displayMeal variables
const displayItems = document.getElementById('displayItems'),
displayNav = document.getElementById('displayNav'),
popularItems = document.getElementById('popularItems');
let catMeal = [] ;
const search = document.getElementById('search');
const submit = document.getElementById('submit');

function displayMeals() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
    .then(res => res.json())
    .then(data => {
        let dataMeal = data.meals;
        dataMeal.forEach(element => {
        displayItems.innerHTML += `
        <div class="displayItemsSub">
            <img src="${element.strMealThumb}" alt="${element.strMeal}">
            <div class="meal-info">
                <h3 class="mealHeader">${element.strMeal}</h3>
            </div>
        </div> 

        `
        });
});
}
function searchMeal(e) {
    e.preventDefault();

    // displayItems.innerHTML = '';
    const searchItem = search.value;

    // Check for empty
    if(searchItem.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
            .then(res => res.json())
            .then(data => {
                
                    let dataMeal = data.meals;

                    if(dataMeal === null) {
                        displayItems.innerHTML = `<h1 class = "text-light" >Sorry . Results not Found!</h1>`;
                    } else {
                        dataMeal.forEach(element => {
                        displayItems.innerHTML += `
                        <div class="displayItemsSub">
                            <img src="${element.strMealThumb}" alt="${element.strMeal}">
                            <div class="meal-info">
                                <h3 class="mealHeader">${element.strMeal}</h3>
                            </div>
                        </div> 
                        `;
                        });
                        search.value = '';
                    }
                    
                
            })
            }
    
}
function showMeal() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=soup`)
    .then(res => res.json())
    .then(data => {
        let dataMeal = data.meals;
        dataMeal.forEach(element => {
        displayItems.innerHTML += `
        <div class="displayItemsSub">
            <img src="${element.strMealThumb}" alt="${element.strMeal}">
            <div class="meal-info">
                <h3 class="mealHeader">${element.strMeal}</h3>
            </div>
        </div> 

        `
        });
});
}


// Event Listeners
// displayMeals();

submit.addEventListener('submit' , searchMeal);



