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
  return listItem;
}

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = addIngredientToList(ingredient);
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);


