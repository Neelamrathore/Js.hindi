const myArray = [1, 2, 3, 4, 5];
const myHero = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern'];

console.log(myArray[0]); // Output: 1
console.log(myHero[0]); // Output: 'Superman'


//array methods
myArray.push(6); // Adds 6 to the end of the array
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

myHero.pop(); // Removes the last element from the array
console.log(myHero); // Output: ['Superman', 'Batman', 'Wonder Woman', 'Flash']


myArray.unshift(0); // Adds 0 to the beginning of the array
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5, 6]

myHero.shift(); // Removes the first element from the array
console.log(myHero); // Output: ['Batman', 'Wonder Woman', 'Flash']




console.log(myArray); // Output: [0, 1, 3, 4, 5, 6]


myHero.splice(1, 0, 'Aquaman'); // Inserts 'Aquaman' at index 1 without removing any elements
console.log(myHero); // Output: ['Batman', 'Aquaman', '     Wonder Woman', 'Flash']

const myArray2 = [7, 8, 9];
const combinedArray = myArray.concat(myArray2); // Combines myArray and myArray2
console.log(combinedArray); // Output: [0, 1, 3, 4, 5, 6, 7, 8, 9]


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3)); // Output: [100, 200, 300]


console.log(Array .isArray("Neelam")); // Output: false

console.log(Array .from("Neelam")); // Output: ['N', 'e', 'e', 'l', 'a', 'm']










