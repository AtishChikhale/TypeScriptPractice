// Array
// syntax
// let arrayName: type[];

let skills: string[] = new Array(2);
skills[0] = "Problem Solving";
skills[1] = "Programing";
// console.log(skills);
skills.push("Software Design");
console.log(skills);

let skill = skills[0];
console.log(typeof skill);

// array properties and methods

let series = [1, 2, 3];
console.log(series.length); //3

// map
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);

// Storing mixed types

let scores = ["Programing", 5, "Software Design", 4];
console.log(scores);

let scores1: (string | number)[];
scores1 = ["Pograming", 5, "Software Design", 4];
console.log(scores1)