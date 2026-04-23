let score = "33"

console.log(score) 
console.log(typeof (score));

let valueInNumber = Number(score) // convert string to number
console.log(valueInNumber);
console.log(typeof (valueInNumber));

let isLoggedIn = "true"
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert string to boolean
console.log(booleanIsLoggedIn);
console.log(typeof (booleanIsLoggedIn));

let someNumber = 3
let stringNumber = String(someNumber) // convert number to string
console.log(stringNumber);
console.log(typeof (stringNumber));

let isLoggedIn2 = false
let stringIsLoggedIn2 = String(isLoggedIn2) // convert boolean to string
console.log(stringIsLoggedIn2);
console.log(typeof (stringIsLoggedIn2));

/*
In JavaScript, you can convert between different data types using built-in functions like Number(), String(), and Boolean(). This process is called type conversion or type coercion. It's important to be aware of how these conversions work, as they can sometimes lead to unexpected results if not used carefully.
*/

//1 => true
//0 => false
// "" => false
// " " => true
// "false" => true
// null => false
// undefined => false



