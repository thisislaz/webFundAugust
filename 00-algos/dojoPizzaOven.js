// function pizzaOven(crustType, sauceType,cheese,toppings){
//     var pizza = {}
//         pizza.crustType = crustType;
//         pizza.sauceType = sauceType;
//         pizza.cheese = cheese;
//         pizza.toppings = toppings;
//     return pizza;
// }

// console.log(pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']))

// var meatLovers = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
// console.log(meatLovers)

// var veggieLovers = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
// console.log(veggieLovers)

// var margarita = pizzaOven('flatbread', 'tomatoe suace', 'fresh mozz', ['sliced tomatoe', 'spinach']);
// console.log(margarita)

// var fishyBusniess = pizzaOven('cheese filled', 'mariana', 'mozz', ['tuna', 'clams'])
// console.log(fishyBusniess)


var crustType = ['handtossed', 'brooklyn', 'stuffed', 'cheesy'];
var sauceType = ['marinara', 'alfredo', 'none', 'tradinational'];
var cheese = ['mozz', 'provolone', 'feta', 'double', 'none', 'chedar'];
var toppings = ['spinach', 'olives', 'tomatoes', 'shrooms', 'onions', 'pineapple']


function randomPick(arr){
    var i = Math.floor(Math.random()*arr.length);
    return arr[i];
}

function randomRange(max, min){
    return Math.floor(Math.random() * max-min) + min;
}

function randomPizza(){
    var pizza ={};
        pizza.crustType = [randomPick(crustType)];
        pizza.sauceType = [randomPick(sauceType)];
        pizza.cheese = [];
        pizza.toppings = [];
    for(var i=0;i<randomRange(5,1); i++){
        pizza.cheese.push(randomPick(cheese))
    }
    for(var i=0;i<randomRange(4,0); i++){
        pizza.toppings.push(randomPick(toppings))
    }
    return pizza
}
console.log(randomPizza());