var Alaska = require('./Alaska');
var Food = require('./Food');



var rupert = new Alaska('Alaska','500$');
console.log(rupert);
console.log(rupert.run());
console.log(rupert.swing());

var food = new Food('sausage','0.5$');

console.log(rupert.eat(food));