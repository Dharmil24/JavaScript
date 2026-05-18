// const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];

// const values = coding.forEach((language) => {
//     // console.log(language);
// }

const mynumbers = [1, 2, 3, 4, 5];
const newmynumbers = mynumbers.filter((number) => number > 2);
newmynumbers.forEach((number) => {
    // console.log(number);
    return number % 2 === 0;
}); 