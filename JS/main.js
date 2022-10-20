// creating variable
// identifier(name must be unique, can't be same as reserved keywords)
// (_ $ are accepted only for variable names)
var variableName = "Welcome to variable";
console.log(variableName);

// let has some scope on strings
let variableName1 = "Welcome to variable";
console.log(variableName1);

// const value shall/will not change. can't reassign value
const variableName2 = "Welcome to variable";
console.log(variableName2);

// re-assigning the value
let variableName3 = "Welcome to variable";
variableName3 = "hello";
console.log(variableName3);

// string
const myName = 'Aareef';
const myNameF = "Arefin";
console.log(myNameF);
console.log(myName);

// backticks
const backticks = `hello, ${myName}`;
const check = `${2 + 2}`;
console.log(backticks);
console.log(check);
console.log(typeof check); //data type checking

// numbers
const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber;
console.log(result);

// booleans
const isCool = false;
console.log(isCool);
console.log(typeof isCool);

if(isCool) {
    console.log("hi man");
} else {
    console.log("oh, hi");
}

// null means value is unknown
// undifined
let x;
console.log(x);

// objects
// const name = 'Aareef'
// const age = 29;

const person = {
    name: 'Aareef',
    age: 29,
}

console.log(person);
console.log(typeof person);

// dot notation
console.log(person.name);
console.log(typeof person.name);

// array
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);

const date = new Date();
console.log(date);
console.log(typeof date);

// comparison operators
const a = 10;
const b = 10;
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
// strict equality
console.log(a === b);
// strict inequality
// strict vs loose equality
console.log(a !== b);





