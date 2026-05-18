// for of

// ["" "" ""]
// [{} {} {}]

const arr = ["a", "b", "c"];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello";
for (const char of greeting) {
    // console.log(char);
}   

// maps

const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
console.log(myMap);
for (const [key, value] of myMap) {
    // console.log(`${key}: ${value}`);
}
// for (const key in myMap) {
    // console.log(myMap[key]);
// }

const myobject = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const [key , value] of Object.entries(myobject)) {
    // console.log(`${key}: ${value}`);
}

for (const key in myobject) {
    // console.log(myobject[key]);    
}

const programmingLanguages = ["JavaScript", "Python", "Java", "C++"];
for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key]);    
}

