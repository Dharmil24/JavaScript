const coding = ['JavaScript', 'Python', 'C++', 'Java', 'Ruby'];
coding.forEach((language) => {
    // console.log(language);
});

coding.forEach((language, index) => {
    // console.log(`${index}: ${language}`);
}

const mycoding = [
    { name: 'JavaScript', popularity: 1 },
    { name: 'Python', popularity: 2 },
    { name: 'C++', popularity: 3 },
]
mycoding.forEach((language) => {
    // console.log(`${language.name} is ranked ${language.popularity}`);
}