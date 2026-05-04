// singleton object

// object literal

const JsUser = {
    name: 'Neelam',
    age: 30,
    location: 'India',
    email: 'neelam@example.com',
    isLoggedIn:  false,
    lastLogininDays: ["Monday", "Tuesday", "Wednesday"],

    
    

};

//console.log(JsUser.name); // Output: 'Neelam'
//console.log(JsUser.age); // Output: 30
//console.log(JsUser.location); // Output: 'India'
//console.log(JsUser.email); // Output: 'neelam@example.com'
//console.log(JsUser.isLoggedIn); // Output: false
//console.log(JsUser.lastLogininDays); // Output: ['Monday', 'Tuesday', 'Wednesday']

JsUser.email= 'newemail@example.com'
//Object.freeze(JsUser) // to make the object immutable

JsUser.email= 'anotheremail@example.com'
//console.log(JsUser.email); // Output: '

JsUser.greet = function() {
    console.log("Hello Js user!");

}
JsUser.greet(); // Output: 'Hello Js user!'
