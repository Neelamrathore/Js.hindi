"use strict" // treat all js code as newer version

// Alert(3+3) // we are using node js , not browser, so alert is not available

console.log(3+3) // this will print 6 in the console
// code readabale and maintainable is important, should be high quality code, and should be easy to understand and debug.


// Datatypes in JavaScript

// Primitive datatypes: string, number, boolean, null, undefined, symbol
// Non-primitive datatypes: object, array, function

const name = "John Doe" // string

const age = 30 // number

const isMarried = false // boolean

const address = null // null

let phoneNumber // undefined

const uniqueID = Symbol("id") // symbol

const person = { // object
    name: "John Doe",
    age: 30,
    isMarried: false
}

const numbers = [1, 2, 3, 4, 5] // array

function greet() { // function
    console.log("Hello, World!");
}

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof address); // object (null is considered an object in JavaScript)
console.log(typeof phoneNumber); // undefined
console.log(typeof uniqueID); // symbol
console.log(typeof person); // object
console.log(typeof numbers); // object (arrays are considered objects in JavaScript)
console.log(typeof greet); // function



