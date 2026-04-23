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
In JavaScript, you can convert between different data types using built-in functions like 
Number(), String(), and Boolean(). This process is called type conversion or type coercion. 
It's important to be aware of how these conversions work, as they can sometimes lead to 
unexpected results if not used carefully.
*/

//1 => true
//0 => false
// "" => false
// " " => true
// "false" => true
// null => false
// undefined => false

//**************************Operations**************************** *//
let value = 3
let negValue = -value // unary operator
console.log(negValue);

let str1 = "Hello"
let str2 = " Neelam"
let str3 = str1 + " " + str2 // binary operator
console.log(str3);

let num1 = 3
let num2 = 4
let sum = num1 + num2 // binary operator
console.log(sum);

let gameCounter = 100
gameCounter++ // increment operator
console.log(gameCounter);

gameCounter-- // decrement operator
console.log(gameCounter);

/*
In JavaScript, operators are used to perform operations on values and variables. 
There are different types of operators, including arithmetic operators (like +, -, *, /), 
assignment operators (like =, +=, -=), comparison operators (like ==, ===, !=), 
logical operators (like &&, ||), and more. Understanding how these operators 
work is essential for writing effective JavaScript code.
*/

/*In JavaScript, you can perform various operations using operators. 
Some common operations include arithmetic operations (like addition, subtraction, multiplication, division), 
string concatenation, and increment/decrement operations. 
It's important to understand how these operators work and how they can be used in 
different contexts to manipulate data effectively.*/

/*prefix and postfix increment/decrement operators can lead to different results, so it's 
important to understand how they work and use them appropriately in your code.*/
/*In JavaScript, the increment (++) and decrement (--) operators can be used in both prefix 
and postfix forms. The difference between the two forms is the order of evaluation.

/*In the prefix form (++variable), the variable is incremented or decremented before its value
 is used in an expression.
In the postfix form (variable++), the variable is incremented or decremented after its value
 is used in an expression.*/

/*It's important to understand the difference between prefix and postfix operators, as they 
can lead to different results in certain situations. Always be mindful of the order of 
evaluation when using these operators in your code.*/
