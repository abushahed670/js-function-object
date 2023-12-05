// array vs object 
shoppingItems = ['books', 'sunglass', 'shoes','pen'];
var friendsAge =[12, 23, 24, 45]
var friendsAge = {
    rahim: 12,
    karim: 13,
    salim: 22,
    jabbar: 14
}

// object-looping 

var shoppingCart ={
    books: 3,
    sunglass: 2,
    keyboard: 1,
    pen: 1,
    mouse: 5,
    shoes: 2,
    shirt: 8
}
const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// kon property kon value ber korte

for ( var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// simple way to find property and value
// for in loop

for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}