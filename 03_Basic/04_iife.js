// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log("I am a function");
})(); // This will immediately invoke the function

// Output: I am a function

(() => {
    console.log("I am an arrow function");
})(); // This will immediately invoke the arrow function

// Output: I am an arrow function