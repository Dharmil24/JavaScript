const accountId = 12345;
let accountEmail = "dk@gmail.com";
var accountPassword = "12345";
accountCity = "Ahmedabad";

// accountId = 54321; // This will throw an error because accountId is declared with const
accountEmail = "ak@gmail.com"; // This is valid because accountEmail is declared with let
accountPassword = "54321";
accountCity = "Surat";

/* 
prefer not to use var.
because issues with block scope and function scope. 
*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);