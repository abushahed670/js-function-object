function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}
// add(14, 24);
var total = add(13, 23);
console.log('total:', total);

// another exm
 function bringSingra(money){
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;
 }
  var singaras = bringSingra(200);
  console.log('Can get:', singaras);