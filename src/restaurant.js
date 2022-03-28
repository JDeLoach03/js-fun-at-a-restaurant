function createRestaurant(name) {
return restName = {
  name: name,
  menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
  } ,
}
}




function addMenuItem(pizzaRestaurant, pizza) {
  var menu = pizzaRestaurant.menus[pizza.type]
  for (var i = 0; i < menu.length; i++) {
    // If it already exists, don't add, otherwise add
    if (pizza.name === menu[i].name) {
      return pizzaRestaurant
    }
  }
  return menu.push(pizza)
}






//Think of an object as a thing, and you can have multiple things

module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
