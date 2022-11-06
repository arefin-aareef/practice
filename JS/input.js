// "use strict";

// const ps = require("prompt-sync");
// const prompt = ps();

// let name = prompt("Enter your name : ");
// console.log(`Hello ${name}`);

// EXERCISE FOR OBJECTS

let square = {
    side : 5,
    get area () {
        return this.side * this.side
    }
}
console.log(square.area)