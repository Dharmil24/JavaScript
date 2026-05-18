// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myBirthDate = new Date('1998-11-28');
// console.log(myBirthDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myBirthDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', { month: 'long' });
newDate.toLocaleString('default', { month: 'short' });
newDate.toLocaleString('default', { weekday: 'long' });
newDate.toLocaleString('default', { weekday: 'short' });