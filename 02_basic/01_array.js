// array

const myArray = [1, 2, 3, 4, 5];

const myHeros = ['spiderman', 'ironman', 'thor', 'hulk', 'captain america'];

const myArray2 = new Array(1, 2, 3, 4, 5);

// console.log(myArray[0]);
// console.log(typeof myArray);
// console.log(Array.isArray(myArray));

// array methods

myArray.push(6);
myArray.unshift(0);
myArray.pop();
myArray.shift();
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);

// slice and splice

console.log("a", myArray);

const myn1 = myArray.slice(1, 4);
// console.log(myn1);
// console.log("B", myArray);

const myn2 = myArray.splice(1, 4);
console.log(myn2);
console.log("C", myArray);
