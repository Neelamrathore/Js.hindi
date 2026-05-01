const  score=400;

console.log(score); // Output: 400

const balance  = new Number(500);
console.log(balance); // Output: [Number: 500]
console.log(balance.valueOf()); // Output: 500  

console.log(balance.toString().length); // Output: 3
console.log(balance.toFixed(2)); // Output: 500.00000   


const otherNumber = 123.8900;
console.log(otherNumber.toPrecision(3)); // Output: 123
console.log(otherNumber.toExponential(2)); // Output: 1.23e+2   


const hunderds = 1000000;
console.log(hunderds.toLocaleString('en-IN')); // Output: 10,00,000

//*****************MATH OBJECT****************** *//
console.log(Math); // Output: [Math: null] { ... }
console.log(Math.abs(-5)); // Output: 5

console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.3)); // Output: 4

console.log(Math.ceil(4.2)); // Output: 5
console.log(Math.floor(4.8)); // Output: 4

console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));

console.log(Math.random());

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Output: Random number between 10 and 20 (inclusive)  








