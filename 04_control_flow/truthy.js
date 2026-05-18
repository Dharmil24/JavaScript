const userEmail = "hite@gpogle.ai";

if (userEmail) {
  console.log("You have an email");
}
else {
  console.log("Please provide an email");
}

// Falsy values: false, 0, "", null, undefined, NaN, -0, bigint(0n)

// truthy values: "0", 'false', [], {}, function() {}, 1, -1, Infinity, -Infinity, bigint(1n), ""

// nallish coalescing operator (??) : null, undefined
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10

var1 = undefined ?? 10; // 10
var1 = null ?? 10 ?? 15; // 10

// console.log(val1);
// console.log(var1);

// ternary operator
const age = 20;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote);