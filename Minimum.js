/*Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.*/

function min(x, y) {return x > y ? y: x}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10