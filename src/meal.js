function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(itemName, itemPrice, itemType) {
menuItem = {
  name: itemName,
  price: itemPrice,
  type: itemType,
};
return menuItem;
}

function addIngredients(side, ingredients){
    if(ingredients.includes(side) == false) {
      ingredients.push(side)
      return ingredients
    }
  };

function formatPrice(dollar) {
  return `$${dollar}`
}

function decreasePrice(price) {
  return price * .9
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title ,
    ingredients:ingredients ,
    type: menuItemType,
  }
return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
