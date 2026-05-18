const user = {
    username: 'John',
    price: 100,
    welcomeMessage: function() {
        // console.log(`Welcome ${this.username}, your price is ${this.price}`);
        // console.log(this);
        
    }
};

user.welcomeMessage(); // Welcome John, your price is 100
// console.log(this); // Window object

// function chai() {
    // let username = 'Jane';
    // console.log(this.username); // undefined
// }
// chai(); // Window object

const addTwo = (a, b) => {
    return a + b;
}

const addTwoShort = (a, b) => a + b; // Implicit return

const addTwo = (a, b) => (a + b);

console.log(addTwo(3, 4)); // 7
console.log(addTwoShort(3, 4)); // 7

