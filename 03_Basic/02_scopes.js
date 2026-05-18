let a = 1;
const b = 2;
var c = 3;
if (true) {
  let a = 10;
  const b = 20;
//   console.log("inner : ", a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "john";

    function two() {
        const website = "example.com";
        console.log(username);
        console.log(website);
    }
    two();
}
one();

if (true) {
    const username = "john";

    if (true) {
        const website = " example.com";
        // console.log(username);
        // console.log(username + website);
    }
    // console.log(website);    
}
// console.log(username);

// ******************** intersting example ********************

console.log(one(5));
function one(num) {
    return num + 10;
}

two(5);
const two = function(num) {
    return num + 20;
}