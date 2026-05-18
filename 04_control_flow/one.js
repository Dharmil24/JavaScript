// const isUserLoggedIn = true;
// const temperature = 25;

// // if (temperature < 30) 
// // {
// //     console.log("Less than 30 degrees");
// // }
// // else 
// // {
// //     console.log("Temperature is greater than or equal to 30 degrees");
// // }

// // < , > , <= , >= , == , === , != , !==

// // const score = 85;
// // if (score >= 90) {
//     // const power = "fly"
//     // console.log(`Grade: A, Power: ${power}`);
// // }

// const balance = 1000;
// // if (balance >= 500) console.log("test");

// if (balance < 500) {
//     console.log("Less than 500");
// }
// else if (balance < 750) {
//     console.log("Less than 750");
// }
// else if (balance < 900) {
//     console.log("Less than 900");
// }
// else {
//     console.log("Greater than or equal to 900");
// }

const userLoggedIn = true;
const debitCardLinked = true;
const loggedInWithGoogle = false;
const loggedInwithEmail = true;

if (userLoggedIn && debitCardLinked ) {
    console.log("User can make a purchase");
}
if (userLoggedIn || loggedInWithGoogle || loggedInwithEmail) {
    console.log("User is logged in");
}