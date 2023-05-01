// with let and const

//syntax
// let variableName: type;
// let variableName:type = value;
// const constantName= value;

// firts way
let counter: number;
counter = 1;
console.log(counter);
// update the counter value number to string
// counter = "Hello"; //Type '"Hello"' is not assignable to type 'number'.

// second way
let counter1: number = 1;
console.log(counter1);

let age: number = 23;
console.log(age);

let active: boolean = true;
console.log(active);

// Type Annotation using Array

// syntax
// let arrayName: type[]

let names: string[] = ["Jhon", "Jane", "Peter", "David", "Mary"];
console.log(names);

// Objects

let Person: {
  name: string;
  age: number;
};

Person = {
  name: "Jhon",
  age: 25,
}; //valid

// function and arguments & return types
let greetings: (name: string) => string;

greetings = function (name: string) {
  return `Hi ${name}`;
};
let result = greetings("Atish");
console.log(result);

// type '() => void' is not assignable to type '(name: string) => string'.
//   Type 'void' is not assignable to type 'string'.
// greetings = function (){
//     console.log('Hello')
// }


