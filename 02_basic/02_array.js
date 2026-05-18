const marvelHeroes = ['Spider-Man', 'Iron Man', 'Thor', 'Hulk', 'Captain America'];
const dc = ['Batman', 'Superman', 'Wonder Woman'];

// marvelHeroes.push(dc);

// console.log(marvelHeroes);

// const newHeroes = marvelHeroes.concat(dc);

// console.log(newHeroes);

const allHeroes = [...marvelHeroes, ...dc];

// console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const real_anotherArray = anotherArray.flat(Infinity);

// console.log(real_anotherArray);

// console.log(Array.isArray("hello"));
// console.log(Array.from("hello"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
