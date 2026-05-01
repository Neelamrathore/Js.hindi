const name = "Neelam";
const repoCount = 5;
console.log(name +repoCount+ " Value");
 // Template literals
const message = (`Hello, my name is ${name} and I have ${repoCount} repositories.`);
console.log(message); // Output: Hello, my name is Neelam and I have 5 repositories.

// String methods
const gameName = new String ('Neelamnk'); 
console.log(gameName[0]); // Output: N
console.log(gameName.__proto__) ; // Output: 8  

console.log(gameName.length); // Output: 8
console.log(gameName.toUpperCase()); // Output: NEELAMNK
console.log(gameName.toLowerCase()); // Output: neelamnk
console.log(gameName.includes('nk')); // Output: true
console.log(gameName.startsWith('Neel')); // Output: true
console.log(gameName.endsWith('nk')); // Output: true
console.log(gameName.indexOf('a')); // Output: 4
console.log(gameName.slice(0, 5)); // Output: Neelam
console.log(gameName.replace('Neelam', 'Neelam Kumar')); // Output: Neelam Kumar    