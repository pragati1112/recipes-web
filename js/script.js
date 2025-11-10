const recipe = () => {
   fetch("https://dummyjson.com/recipes")
    .then(response => response.json())
    .then(data => {
      const recipes = data.recipes;
      const container = document.getElementById("recipe-container");
      container.innerHTML = "";

      recipes.forEach(item => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("card", "h-100");

        recipeDiv.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${item.image}" alt="${item.name}" class="card-img-top">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title font2">${item.name}</h5>
            <p>${item.ingredients}</p>
            <button class="btn-view font3" onclick="viewDetails(${item.id})">
              View Details
            </button>
          </div>
        `;

        container.appendChild(recipeDiv);
      });
    })
    .catch(error => console.error("Error fetching recipes:", error));
};

recipe();

function viewDetails(id) {
  localStorage.setItem("selectedRecipeId", id);
  window.location.href = "./PAGES/RECIPE-DATAIL.html";
}
