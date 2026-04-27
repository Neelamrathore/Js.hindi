// Primitive data types in JavaScript include:
// 1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// 2. String: Represents a sequence of characters. Example: "Hello, World!"
// 3. Boolean: Represents a logical entity that can have two values: true or false.
// 4. Null: Represents the intentional absence of any object value. It is a primitive value 
// that represents the null or "empty" value.
// 5. Undefined: Represents a variable that has been declared but has not been assigned a 
// value.
// 6. Symbol: Represents a unique identifier that can be used as a key for object properties.


const score = 100; // Number
const name = "Neelam"; // String
const isLoggedIn = true; // Boolean
const user = null; // Null
let age; // Undefined
const uniqueId = Symbol(123); // Symbol
const anotherUniqueId = Symbol(123); // Another Symbol with the same description
const isSameSymbol = uniqueId === anotherUniqueId; // false, because each Symbol is unique
console.log(isSameSymbol); // Output: false

//console.log(typeof (score)); //
//console.log(typeof (name));//
//console.log(typeof (isLoggedIn));//
//console.log(typeof (user));//
//console.log(typeof (age));//
console.log(typeof (uniqueId));//node ./.devcontainer/01_basic/04_datatypes_summary.js  


// In addition to primitive data types, JavaScript also has non-primitive data types, such as:
// 1. Object: A collection of properties, where each property is defined as a key-value pair. 
// Objects can represent more complex data structures and can 
// include arrays, functions, and other objects.
// 2. Array: A special type of object that is used to store ordered collections of values. 
// Arrays can hold values of any type, including other arrays and objects.
// 3. Function: A block of code designed to perform a particular task. Functions are also 
// objects in JavaScript and can be assigned to variables, passed as arguments, and returned 
// from other functions.

const heros = ["Superman", "Batman", "Wonder Woman"]; // Array
const person = { name: "Neelam", age: 30 }; // Object
function greet() { // Function
    console.log("Hello, World!");
}

// Understanding these data types is crucial for effective programming in JavaScript, as it 
// allows you to manipulate and work with data in various ways.
// Understanding these data types is crucial for effective programming in JavaScript, as it 
// allows you to manipulate and work with data in various ways.    