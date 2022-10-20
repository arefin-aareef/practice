console.log("Welcome to JS practice");
// CREATING VARIABLE
// IDENTIFIER(NAME MUST BE UNIQUE, CAN'T BE SAME AS RESERVED KEYWORDS)
// (_ $ ARE ACCEPTED ONLY FOR VARIABLE NAMES)
// OPT 1
var variableName = "variable creating method 1";
console.log(variableName);

// LET HAS SOME SCOPE ON STRINGS
let variableName1 = "variable creating method 2";
console.log(variableName1);

// CONST VALUE SHALL/WILL NOT CHANGE. CAN'T REASSIGN VALUE
const variableName2 = "variable creating method 3";
console.log(variableName2);

// RE-ASSIGNING THE VALUE
let variableName3 = "Welcome to variable";
variableName3 = "Reassigning variable value";
console.log(variableName3);

// STRING
console.log("STRING");
const myName = 'Aareef';
const myNameF = "Arefin";
console.log(myNameF);
console.log(myName);

// BACKTICKS
console.log("BACKTICKS");
const backticks = `hello, ${myName}`;
const check = `${2 + 2}`;
console.log(backticks);
console.log(check);
console.log(typeof check); //data type checking

// NUMBERS
console.log("NUMBERS");
const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber;
console.log(result);

// BOOLEANS
console.log("BOOLEANS");
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
console.log("OBJECTS");
const person = {
    name: 'Aareef',
    age: 29,
}
console.log(person);
console.log(typeof person);

// dot notation
console.log("DOT NOTATION");
console.log(person.name);
console.log(typeof person.name);

// array
console.log("ARRAY");
const arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);

const date = new Date();
console.log(date);
console.log(typeof date);

// comparison operators
console.log("COMPARISON OPERATOR");
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

// lgical operators
console.log("LOGICAL OPERATORS");
// and && => both operators need to be true
console.log(true && false);
// or || => at least one operator need to be true
console.log(true || false);
// not
console.log(!true);

// if statements
console.log("IF - ELSE STATEMENTS");
const age = 18;
if (age > 18) {
    console.log("You may enter");
} else if (age === 18) {
    console.log("You are adult now");
} else {
    console.log("grow up");
}

// while loop
// display 0-9
console.log("WHILE LOOP");
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// for loop
// for([initialization]; [condition]; [final-expression])
console.log("FOR LOOP");
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// functions
// block of code which performs a task
console.log("FUNCTION");
// a function declaration opt 1
function square(number) {
    return number * number;
}
const result1 = square(5);
console.log(result1);

// a function declaration opt 2
const func = function(number) {
    return number + number;
}
const result2 = func(2);
console.log(result2);

// a function declaration opt 3
const func2 = (number) => {
    return number + number;
}
const result3 = func2(10);
console.log(result3);

