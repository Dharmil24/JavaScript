const tinderUser = new Object();
const tinderUser.name = "John";
const tinderUser.age = 30;

// console.log(tinderUser);

const regularUser = {
    name: "Jane",
    fullname : {
        firstName: "Jane",
        lastName: "Doe",
    },
    age: 25,
    isLoggedIn: false,
};
// console.log(regularUser);

// console.log(regularUser.fullname.firstName);
// console.log(regularUser.fullname.lastName);

const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "one", 4: "two"};

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {userId: 1, name: "Alice"},
    {userId: 2, name: "Bob"},
    {userId: 3, name: "Charlie"},
]

users[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    name: "JavaScript",
    price: 999,
    instructor: "John Doe",
    isAvailable: true,
};

const {name, price, instructor, isAvailable} = course;
// console.log(name);
// console.log(price);
// console.log(instructor);
// console.log(isAvailable);