// array vs object 
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
