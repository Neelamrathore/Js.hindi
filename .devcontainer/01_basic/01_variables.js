const accountID = 144553
let accountEmail = "nj@gmail.com"
var accountPassword = 123456
accountCity = "New York"

// accountid = 2 // not allowed because accountID is a constant

accountEmail = "nj@gmail.com"
accountPassword = "123456"
accountCity = "New York"


console.log(accountID);
/*
prefer to use const for variables that won't change, and let for variables that will change. Avoid using var as it has function scope and can lead to unexpected behavior.
*/
/*
prefer to use camelCase for variable names in JavaScript, and avoid using underscores or hyphens. This is a common convention in JavaScript and helps improve readability.
*/
/*
prefer not to use var because of issue in block scopeand function scope, and instead use let and const for better readability and maintainability of code.
*/



console.table([accountID, accountEmail, accountPassword, accountCity]);