var shoppingCart ={
    books: 3,
    sunglass: 2,
    keyboard: 1,
    pen: 1,
    mouse: 5
}
console.log(shoppingCart);
// when you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;
//alternative system
//when you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

//to get property value from property name
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// we can also find the properties
var properties = Object.keys(shoppingCart);
console.log(properties); 
// we can also find the value
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

//  to set property values 

shoppingCart.mouse = 15;
console.log(shoppingCart);