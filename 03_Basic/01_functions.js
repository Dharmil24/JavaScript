function printHello() {
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

printHello();

function addTwoNumbers(a, b) {
    console.log(a + b);
}
addTwoNumbers(3, 5);

function addTwoNumbersAndReturn(a, b) {
    return a + b;
}
let result = addTwoNumbersAndReturn(3, 5);
console.log(result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please provide a username.");
        return;
    }
    return `Welcome back, ${username}!`;
}
// console.log(loginUserMessage("Alice"));
// console.log(loginUserMessage());

function calculateCartPrice(...prices) {
    return prices
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    name: "Alice",
    age: 30,
}
function handleObject(anyObject) {
    console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({ name: "Bob", age: 25 });

const myArray = [1, 2, 3, 4, 5];
function returnsecondvalue(array) {
    return array[1];
}
console.log(returnsecondvalue(myArray));