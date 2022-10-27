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

// // FOR OF

// for(let name of names) {
//     console.log(name);
// }

// FUNCTION

// function cookMaggi(maggi, water, pan) {
//     console.log("Maggi will be ready in "
//     + maggi * 2
//     + " minutes"
//     + " and Ingredients used are:- "
//     + maggi + " Maggi, "
//     + water + " cups of water"
//     + " using " + pan + " Pan")
// }
// cookMaggi(4, 8, 1);

// FUNCTION WITH RETURN VALUE

// let bread1 = prompt("Which bread would u like to have:- ");
// let veggies1 = prompt("What are your favurite veggies:- ");
// let sauce1 = prompt("Which sauce would you like to have:- ");

// function makeSandwich(bread, veggies, sauce) {
//     let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich is ready";
//     return sandwich;
// }

// let vegSandwich = makeSandwich(bread1, veggies1, sauce1);
// console.log(vegSandwich);

// function hello(fname, lname) {
//     console.log("Hello " + fname + " " + lname)
// }
// hello("Arefin", "Aareef");
// hello("Rakib", "Raihan");

// function addition(a,b) {
//     return a+b;
// }
// console.log(addition(5,5))

// STRINGS

// var favShow = "Game of Throne";
// console.log(favShow.length);

// console.log(favShow[0]);
// console.log(favShow[favShow.length-1]);

// RETURNING THE POSITION OF A SUB STRING

// console.log(favShow.indexOf("of"));

// SPECIFIC POSITION OF A SUB STRIING

// console.log(favShow.slice(5,9));

// var myName = "My Name Is Aareef";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// USER DEFINED DATA TYPES

// OBJECTS

// let animal = {
//     name: "Cow",
//     legs: 4
// }

// console.log(animal);

// // DOT NOTATION

// console.log(animal.name); 

// // BRACKET NOTATION

// let legsProp = "legs"
// console.log(animal[legsProp]);

// let lecture = 10;
// let section = 3;
// let title = 'Javascript'

// //course is an object
// const course = {  
//     //properties
//     lecture: 10, 
//     section: 3,
//     title: 'Javascript',
//     //nested object
//     notes: { 
//         intro: 'Welcome'
//     },
//     //creating function in a object
//     enroll() {
//         console.log('You are enrolled')
//     }
// }

// // calling function out of object
// course.enroll();
// // adding new property in object
// course.price = 999; 
// console.log(course);

// FACTORY FUNCTION

// function createCourse(title) {
//     return {  
//         title: title,
//         enroll() {
//             console.log('You are enrolled')
//         }
//     }
   
// }
// const course = createCourse('JavaScript2');
// console.log(course);

// CONSTRUCTER FUNCTION

// function Course(title) {
//     this.title = title,
//     this.enroll = function() {
//         console.log('You are enrolled Now')
//     }
// }
// const course = new Course('JS');
// course.enroll();
// console.log(course.title);

// // deleting property
// delete course.title;
// console.log(course);
// // adding property to function
// course.checkEnroll = function() {
//     console.log('30 Enrolled!');
// }
// course.enroll();

// console.log(course);

// CONSTRACTOR METHOD

// const newCourse = new Course('JS Constructor Method');
// console.log(course.constructor);
// console.log(newCourse.constructor);

// ARRAYS

// let names = ["Aareef", "Hemel", "Rakib", "Chayon"];
// console.log(names);
// console.log(names.length);
// console.log(names[2]);

// for(let index in names) {
//     console.log(index, names[index]);
// }

// DIFFERNCE BETWEEN PRIMITIVE AND REFERENCE DATA TYPE 
// primitive data type
// let number = 10;
// // pass by value
// let number2 = number; 
// number = 15;
// console.log(number);
// console.log(number2);

// // reference data type
// let obj = {number: 10};
// // pass by reference
// let obj2 = obj;
// obj.number = 15;
// console.log(obj);
// console.log(obj2);

