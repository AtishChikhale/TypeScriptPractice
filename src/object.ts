// 1.
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
console.log(employee);

// 2.
let employee1: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

employee1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
console.log(employee1);

// 3.
let employee2: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};
console.log(employee2);

// The empty object
// let vacant: {};
// vacant.firstName = "John";//Property 'firstName' does not exist on type '{}'

let vacant: {} = {};
console.log(vacant.toString());
