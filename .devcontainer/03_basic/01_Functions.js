function calculateCartPrice(val1, val2, ...num1 ) {
    return num1 
}

console.log(calculateCartPrice(100,200,500)); 


const user = {
   username: "Hitesh Choudhary",
    Price: 30,
    
};
 
function handleObject(obj) {
    console.log(obj.username); // Accessing the username property of the object
    console.log(obj.Price); // Accessing the Price property of the object
}

handleObject(user); // Passing the user object to the function  

const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
    return getArray[1]; // Accessing the second element of the array (index 1)
}

console.log(returnSecondValue(myNewArray)); // Output: 2

