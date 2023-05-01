"use strict";
// with let and const
//syntax
// let variableName: type;
// let variableName:type = value;
// const constantName= value;
// firts way
let counter;
counter = 1;
console.log(counter);
// update the counter value number to string
// counter = "Hello"; //Type '"Hello"' is not assignable to type 'number'.
// second way
let counter1 = 1;
console.log(counter1);
let age = 23;
console.log(age);
let active = true;
console.log(active);
// Type Annotation using Array
// syntax
// let arrayName: type[]
let names = ["Jhon", "Jane", "Peter", "David", "Mary"];
console.log(names);
// Objects
let Person;
Person = {
    name: "Jhon",
    age: 25,
}; //valid
// function and arguments & return types
let greetings;
greetings = function (name) {
    return `Hi ${name}`;
};
let result = greetings("Atish");
console.log(result);
// type '() => void' is not assignable to type '(name: string) => string'.
//   Type 'void' is not assignable to type 'string'.
// greetings = function (){
//     console.log('Hello')
// }
