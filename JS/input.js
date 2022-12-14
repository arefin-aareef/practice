// "use strict";

// const ps = require("prompt-sync");
// const prompt = ps();

// let name = prompt("Enter your name : ");
// console.log(`Hello ${name}`);

// EXERCISE FOR OBJECTS - 01

let square = {
    side : 5,
    get area () {
        return this.side * this.side
    }
}
console.log(square.area)

// JOIN FUNCTION - 02

function stringConcat(separator, ...strings) {
    let returnVal = ''
    strings.forEach((string, i) => {
        if(i == strings.length -1){
            returnVal += string;
        } 
        else{
            returnVal += string + separator;
        }
    })
    return returnVal;
}
console.log(stringConcat('+', 'this', 'is', 'invalid'))

// DESTRUCTURING - EXERCISE 03

let [first,second,third,...others] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(first)
console.log(others)

// EXERCISE 4

function matchHouses(house) {
    if(house <=0){
        return 0;
    }
    else {
        return house * 6 - house + 1;
    }
    
}
console.log(matchHouses(2))