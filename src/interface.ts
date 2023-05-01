// Basic type interface

// let counter2:number
let counter2 = 0; //Automaticaly infer the type of counter2 as number
console.log(counter2);

let counter3: number = 1;
console.log(counter3);

// function setCounter(max=100){
//
// }

function increment(counter: number) {
  return counter++;
}
let result1 = increment(10);
console.log(result1);

function increment1(counter: number): number {
  return counter++;
}
let result2 = increment1(20);
console.log(result2);

// the common best type algorithm

let items = [1, 2, 3, null];
console.log(items);
//console.log(typeof items);

let items1 = [1, 2, 3, null, "Hi"];
console.log(items1);

let arr = [new Date(), new RegExp("d+")];
console.log(arr);

