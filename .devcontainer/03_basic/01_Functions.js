
function sayMyName(){
 console.log("N");
 console.log("E");
 console.log("E");
 console.log(" L");    
 console.log("A" );
 console.log("M");
} 



//sayMyName(); //
   

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers(3, 4); // 7
addTwoNumbers(10, 20); // 30
addTwoNumbers(100, 200); // 300

function multiplyTwoNumbers(num1, num2){
    console.log(num1 * num2);
}

multiplyTwoNumbers(3, 4); // 12
multiplyTwoNumbers(10, 20); // 200
multiplyTwoNumbers(100, 200); // 20000  

function login(username, password){
    if(username === "admin" && password === "1234"){
        console.log("Login successful");
    } else {
        console.log("Login failed");
    }
}

login("admin", "1234"); // Login successful
login("admin", "wrongpassword"); // Login failed
login("user", "1234"); // Login failed  


////********************function2***************** *//

function calculateCartPrice(val1, val2, ...num1){
    return num1

}
 console.log(calculateCartPrice(100,200,300)); // 100

 const user = {
    username: "John",
    price : 100,
 }

 function hqndleObject(anyobject){
    console.log('Username: ' + anyobject.username);
    console.log('Price: ' + anyobject.price);           


 }
hqndleObject(user); // Username: John Price: 100


const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];

}
console.log(returnSecondValue(myNewArray)); // 300


























