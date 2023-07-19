const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

function addIngredientToList(ingredient) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  ingredientsList.appendChild(listItem);
}

ingredients.forEach((ingredient) => addIngredientToList(ingredient));