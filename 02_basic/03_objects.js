// singleton

// object literals

const mySym = Symbol("mySym");

const jsUser = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  [mySym]: "myValue",
};

// console.log(jsUser.name); // John
// console.log(jsUser.age); // 30
// console.log(jsUser["isAdmin"]); // false
// console.log(jsUser[mySym]); // myValue

jsUser.age = 31;
// console.log(jsUser.age); // 31

// Object.freeze(jsUser);
jsUser.age = 32; // won't change
// console.log(jsUser.age); // 31

jsUser.greeting = function () {
  console.log("Hello, JS User");
}
jsUser.greetingTwo = function () {
  console.log(`Hello, ${this.name}!`);
}
// console.log(jsUser.greeting()); // Hello, JS User!
// console.log(jsUser.greetingTwo()); // Hello, John!