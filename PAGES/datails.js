// Get selected recipe ID from localStorage
const recipeId = localStorage.getItem("selectedRecipeId");

// Fetch recipes from API
fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(data => {
    const recipe = data.recipes.find(r => r.id == recipeId);
    const container = document.getElementById("recipe-container1");

    if (recipe) {
      container.innerHTML = `
        <div class="recipe-detail-wrapper shadow-lg p-4 rounded-4 my-4 bg-white">

          <!-- Recipe Name -->
          <h2 class="text-center mb-4 font1">${recipe.name}</h2>

          <!-- Info Bar -->
          <div class="recipe-info-bar d-flex justify-content-center flex-wrap gap-4 mb-4">
            <span><i class="fa-regular fa-clock me-1"></i> ${recipe.prepTimeMinutes} mins</span>
            <span><i class="fa-solid fa-bowl-food me-1"></i> ${recipe.servings} servings</span>
            <span><i class="fa-solid fa-star me-1" style="color: #FFD43B;"></i> ${recipe.rating}</span>
            <span><i class="fa-solid fa-earth-americas me-1"></i> ${recipe.cuisine}</span>
            <span><i class="fa-solid fa-fire-flame-curved me-1"></i> ${recipe.difficulty}</span>
          </div>

          <!-- 3 Columns Layout -->
          <div class="row text-center align-items-start">
            
            <!-- Left: Image -->
            <div class="col-md-4 col-12 mb-4">
              <img src="${recipe.image}" alt="${recipe.name}" class="w-100 recipe-img">
            </div>

            <!-- Middle: Ingredients -->
            <div class="col-md-4 col-12 mb-4">
              <h5 class="fw-bold mb-2 font2">Ingredients</h5>
              <p class="recipe-text text-start">${Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : recipe.ingredients}</p>
            </div>

            <!-- Right: Instructions -->
            <div class="col-md-4 col-12 mb-4">
              <h5 class="fw-bold mb-2 font2">Instructions</h5>
              <p class="recipe-text text-start">${recipe.instructions}</p>
            </div>

          </div>

          <!-- Tags or Cuisine Type -->
          <div class="text-center mt-3">
            ${recipe.tags && recipe.tags.length ? 
              `<p class="fw-semibold">Tags: 
                ${recipe.tags.map(tag => `<span class="badge bg-warning text-dark me-1">${tag}</span>`).join('')}
              </p>` 
              : ''
            }
          </div>

          <!-- Back Button -->
          <div class="text-center mt-4">
            <button class="recipe-btn btn-view px-4 py-2 rounded-pill fw-semibold font3" id="back-btn">
               Back to all recipes
            </button>
          </div>

        </div>
      `;

      // Back button event
     document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "../index.html";
 // ya jis page par wapas jana ho
});

    } else {
      container.innerHTML = "<h3 class='text-center mt-5'>Recipe not found!</h3>";
    }
  })
  .catch(err => console.error("Error fetching recipe:", err));



  