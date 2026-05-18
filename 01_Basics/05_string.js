const message = "Hello, World!";
const repoCount = "100";

// console.log(message + repoCount + "value");

// console.log(`${message} and my repo count is ${repoCount}`);

const gameName = "GTA-5";

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf("T"));

const newString = gameName.substring(0 , 3)
// console.log(newString);

const anotherString = gameName.slice(0 , 3);
// console.log(anotherString);

const newStringOne = "   Hello World    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=abc123";
url.replace("youtube", "vimeo");
// console.log(url);
// console.log(url.includes('www'));

console.log(gameName.split('-'));
