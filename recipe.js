const data = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','y'];
var recipeContainer = document.querySelector(".recipe-list");









function getRandomElement(array) {
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * array.length);
    // Return the element at the random index
    return array[randomIndex];
  }

  var random = getRandomElement(data);

  
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${random}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
   
    if(data.meals === null){
      recipeContainer.innerHTML = `
      <div class='recipe' style="text-align:center">
      <h1 style="margin:10px 0;">NO RECIPE FOUND</h1>
      </div>
      `
  }
data.meals.forEach(meal => {

recipeContainer.innerHTML += `
<div class="recipe">
<img src="${meal.strMealThumb}">
<p>${meal.strMeal} (${meal.strCategory})</p>
<h4>Ingredients</h4>
<ul>
<li>${meal.strMeasure1} ${meal.strIngredient1}<li>
<li>${meal.strMeasure2} ${meal.strIngredient2}<li>
<li>${meal.strMeasure3} ${meal.strIngredient3}<li>
<li>${meal.strMeasure4} ${meal.strIngredient4}<li>
<li>${meal.strMeasure5} ${meal.strIngredient5}<li>
<li>${meal.strMeasure6} ${meal.strIngredient6}<li>
<li>${meal.strMeasure7} ${meal.strIngredient7}<li>
<li>${meal.strMeasure8} ${meal.strIngredient8}<li>
<li>${meal.strMeasure9} ${meal.strIngredient9}<li>
<li>${meal.strMeasure10} ${meal.strIngredient10}<li>
<li>${meal.strMeasure11} ${meal.strIngredient11}<li>
<li>${meal.strMeasure12} ${meal.strIngredient12}<li>
<li>${meal.strMeasure13} ${meal.strIngredient13}<li>
<li>${meal.strMeasure14} ${meal.strIngredient14}<li>
<li>${meal.strMeasure15} ${meal.strIngredient15}<li>
<li>${meal.strMeasure16} ${meal.strIngredient16}<li>
<li>${meal.strMeasure17} ${meal.strIngredient17}<li>
<li>${meal.strMeasure18} ${meal.strIngredient18}<li>
<li>${meal.strMeasure19} ${meal.strIngredient19}<li>
<li>${meal.strMeasure20} ${meal.strIngredient20}<li>
</ul>
<h4>Instruction</h4>
<details>
  <summary>Show Instruction</summary>
  <p class="instruction">${meal.strInstructions}</p>
 </details>

</div>
`;  



var liElements = document.querySelectorAll("li");
liElements.forEach(function(liElement) {
    if (liElement.textContent === 'null null' || liElement.textContent.trim() === 'null') {
        
        liElement.style.display ='none';
      
    }
});

});
 
  })
  .catch(error => {
   console.log(error);
  });


  var search = document.getElementById('search');

document.getElementById('searchBtn').addEventListener('click',()=>{ 
  var currentSearch = search.value;


  console.log(currentSearch);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${currentSearch}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
         
          recipeContainer.innerHTML = '';

          if(data.meals === null){
            recipeContainer.innerHTML = `
            <div class='recipe' style="text-align:center">
            <h1 style="margin:10px 0;">NO RECIPE FOUND</h1>
            </div>
            `
        }

        data.meals.forEach(meal => {
        
        
        
        recipeContainer.innerHTML += `
        <div class="recipe">
        <img src="${meal.strMealThumb}">
        <p>${meal.strMeal} (${meal.strCategory})</p>
        <h4>Ingredients</h4>
        <ul >
        <li>${meal.strMeasure1} ${meal.strIngredient1}<li>
        <li>${meal.strMeasure2} ${meal.strIngredient2}<li>
        <li>${meal.strMeasure3} ${meal.strIngredient3}<li>
        <li>${meal.strMeasure4} ${meal.strIngredient4}<li>
        <li>${meal.strMeasure5} ${meal.strIngredient5}<li>
        <li>${meal.strMeasure6} ${meal.strIngredient6}<li>
        <li>${meal.strMeasure7} ${meal.strIngredient7}<li>
        <li>${meal.strMeasure8} ${meal.strIngredient8}<li>
        <li>${meal.strMeasure9} ${meal.strIngredient9}<li>
        <li>${meal.strMeasure10} ${meal.strIngredient10}<li>
        <li>${meal.strMeasure11} ${meal.strIngredient11}<li>
        <li>${meal.strMeasure12} ${meal.strIngredient12}<li>
        <li>${meal.strMeasure13} ${meal.strIngredient13}<li>
        <li>${meal.strMeasure14} ${meal.strIngredient14}<li>
        <li>${meal.strMeasure15} ${meal.strIngredient15}<li>
        <li>${meal.strMeasure16} ${meal.strIngredient16}<li>
        <li>${meal.strMeasure17} ${meal.strIngredient17}<li>
        <li>${meal.strMeasure18} ${meal.strIngredient18}<li>
        <li>${meal.strMeasure19} ${meal.strIngredient19}<li>
        <li>${meal.strMeasure20} ${meal.strIngredient20}<li>
        </ul>
        <h4>Instruction</h4>
        <details>
        <summary>Show Instruction</summary>
        <p class="instruction">${meal.strInstructions}</p>
        </details>
        
        </div>
        `;  
     

        var liElements = document.querySelectorAll("li");
        liElements.forEach(function(liElement) {
         if (liElement.textContent === 'null null' || liElement.textContent.trim() === 'null') {
             
             liElement.style.display ='none';
           
         }
        
        });
      
        });
      
        })
        .catch(error => {
         console.log(error);
        });
        
      });
      
      

  
