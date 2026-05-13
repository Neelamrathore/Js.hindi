const user = {
  name: 'John Doe',
  price: 100,

    // Arrow function
    welcomeMessage: function() {
        console.log(`Welcome, ${this.name} , welcome to our website`);
        
    }
}

user.welcomeMessage(); // Welcome, John Doe! Your price is 100. 

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(5, 10)); // 15


