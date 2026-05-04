const newApp = new Object();

newApp.name = "My App";
newApp.version = "1.0.0";
newApp.author = "John Doe";

console.log(newApp);
// Object methods
console.log(Object.keys(newApp)); // Output: ['name', 'version', 'author']
console.log(Object.values(newApp)); // Output: ['My App', '1.0.0', 'John Doe']
console.log(Object.entries(newApp)); // Output: [['name', 'My App'], ['version', '1.0.0'], ['author', 'John Doe']]

const newApp2 = Object.assign({}, newApp);
console.log(newApp2); // Output: { name: 'My App', version: '1.0.0', author: 'John Doe' }

const newApp3 = Object.create(newApp);
console.log(newApp3.name); // Output: 'My App' (inherited from newApp)      

// Object.freeze(newApp);
// newApp.name = "New App"; // This will not change the name property because the object is frozen
// console.log(newApp.name); // Output: 'My App'

Object.seal(newApp);
newApp.version = "2.0.0"; // This will change the version property because the object is 
// sealed
console.log(newApp.version); // Output: '2.0.0'
delete newApp.author; // This will not delete the author property because the object is 
// sealed
console.log(newApp.author); // Output: 'John Doe'   
// Object.preventExtensions(newApp);
// newApp.newProperty = "This will not be added to the object because it is not extensible";
// console.log(newApp.newProperty); // Output: undefined




    