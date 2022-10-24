// BUTTON CLICK ACTION

// let helloButton = document.querySelector('button');
// helloButton.addEventListener('click', showMessage);

// function showMessage() {
//     alert("Have a grerat day!");
// }



// TAKING USER INPUT

// let rollButton = document.querySelector('button');
// rollButton.addEventListener('click', inputMessage);

// function inputMessage() {
//     let name = prompt('Enter name of student');
//     rollButton.textContent = 'Roll No. 1: ' + name;
// }

// LOOPING

// const n = 5;
// for (let i=1; i<=10; i++) {
//     console.log(n + '*' + i + '=' + n*i )
// }

// REVERSE LOOPING

// for (let i=10; i>0; i--) {
//     console.log(n + '*' + i + '=' + n*i )
// }

// CONDITIONAL STATEMENT

// var time = prompt("Hey what's the time");
//     if(time>7 && time<17) {
//         alert("Good morning");
//     } else  {
//         alert("Good night");
//     }

// SWITCH STATEMENTS

// var fruittype = prompt("Which fruit?");
// switch (fruittype) {
//     case 'Mango':
//         console.log('60tk KG');
//         break;
//     case 'Banana':
//         console.log('80tk KG');
//         break;
//     case 'Apple':
//         console.log('90tk KG');
//         break;
//     case 'Pineapple':
//         console.log('60tk KG');
//         break;
//     default:
//         console.log(`${fruittype} Fruit over`);
// }
// console.log("Anything more?");

// WHILE LOOP

// let i=0;
// while(i<5) {
//     console.log('Hello World');
//     i++;
// }

// FOR IN LOOP

// let animal = {  //animal is object with 2 keys
//     name: "Zebra",
//     leg: 4
// };

// for(let key in animal) {
//     console.log(key, animal[key]);
// }

// // ARRAYS

// let names = ["Aareef", "Hemel", "Rakib", "Chayon"];
// for(let index in names) {
//     console.log(index, names[index]);
// }

// // FOR OF

// for(let name of names) {
//     console.log(name);
// }

// FUNCTION

function cookMaggi(maggi, water, pan) {
    console.log("Maggi will be ready in "
    + maggi * 2
    + " minutes"
    + " and Ingredients used are:- "
    + maggi + " Maggi, "
    + water + " cups of water"
    + " using " + pan + " Pan")
}
cookMaggi(4, 8, 1);



