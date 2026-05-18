// for

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        // console.log("3 is best no");
    }
    // console.log(i);
}

for (let i = 1; i < 10; i++) {
    //  console.log(`outer loop value : ${i}`);    
    for (let j = 1; j < 10; j++) {
        // console.log(`inner loop value : ${j} and outer loop value : ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        // console.log("5 is best no");
        // break;
        continue;
    }
    // console.log(i);
}