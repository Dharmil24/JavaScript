// premitive data types

// string , number , bigInt , boolean , null , undefined , symbol

const score = 100;
const scoreValue = 100.1;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id == anotherId);

const bigNumber = 1234567890123456789012345678901234567890n;


// non premitive data type , reference data type

//array , object , function

const heros = ["shaktiman", "doga", "batman"];
const myObj = {
    name : "Shivaji",
    age : 33,
}

const myFunc = function() {
    console.log("Hello World");
}

// **********************************************************

// stack , heap

// stack - primitive data types are stored in stack
// heap - non primitive data types are stored in heap

let myName = "Shivaji";
let anotherName = myName;

anotherName = "Shivaji Patil";

console.log(anotherName);
console.log(myName);

let user = {
    email : "abc@gmail.com",
    upi : "abc@okhdfc",
}

let userTwo = user;

userTwo.email = "xyz@gmail.com";

console.log(user.email);
console.log(userTwo.email);