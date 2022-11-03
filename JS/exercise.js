// OBJECT PRACTICING

const product = {
    itemName: 'Flower',
    price: 50,
    discount: 20,
    itemCode: 'F40'
}

// CREATING OBJECT WITH FACTORY FUNCTION

function createProduct(name, price, discount, itemCode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

// OBJECT FOOTBALL HAS BEEN CREATED - NEW PRODUCT ADDED 

const football = createProduct('football', 400, 10, 'F30')

// CREATING OBJECT WITH CONSTRUCTOR FUNCTION

function Product(name, price, discount, itemCode) {
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    // METHOD TO COUNT DISCOUNT
    this.discountValue = function() {
        return price * discount / 100;
    }
}

// CREATING NEW PRODUCT FOR THE OBJECT

const mobile = new Product('I Phone 14', 100000, 5, 'M10');

// CLASS
// DECLARING

class Product0 {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}
let pencil = new Product('Pencil', 20, 2, 'P10');



// USING EXPRESSIION
const Product1 = class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    // GETTER SETTER
    get getDiscountValue() {
        return this.discount;
    }
    set setDiscountValue(value) {
        this.discount = value;
    }
    // METHOD DEFINITION
    discountValue() {
        return this.discount * this.price / 100;
    }

}

let chair1 = new Product1('Chair', 500, 15, 'C10');


class ProductC {
    constructor(itemName) {
        this.itemName = itemName;
    }

    getItemName() {
        return this.itemName + ' is a product';
    }
}
// EXTENDING CLASS

class Furniture extends ProductC {
    constructor(itemName) {
        super(itemName);
    }

    getItemName() {
        return this.itemName + ' is a furniture';
    }
}

let pencil1 = new Product('Pencil');
let chair = new Furniture('Chair');
console.log(chair)

// ARRAYS

const arrays = [1,2,3,4,5,6,7,8,9];
console.log(arrays)
console.log('Array index: ' + arrays[4])
console.log('Length of Array: ' + arrays[arrays.length-1])

// DECLEARING ARRAYS WITH OBJECTS

const num = new Array(1,2,3,4,5,6,7,8,9);

// PUSH METHOD (adding element in the end to array)

console.log(num.push(10))

// UNSHIFT METHOD (adding element in the beginnig to array)
console.log(num.unshift(0))

// POP METHOD (removing element from end)
console.log(num.pop())

// SHIFT METHOD (removing element from start)
console.log(num.shift())

// CHANGING ARRAY INDEX VALUE
num[0] = 10
num[1] = 'Aareef'
num[2] = {num:80}
console.log(num)

// INDEX OF METHOD

const names = ['Arefin', 'Rakib', 'Hemel', 'Chayon', 'Hemel'];
console.log(names)
console.log(names.indexOf('Hemel'))
console.log(names.indexOf('Hemel',3))
console.log(names.lastIndexOf('Chayon'))

// INCLUDE METHOD

console.log(names.includes('Rakib'))
console.log(names.includes('Rakib', 2))

// FIND OPERATION 

let channels = [{
    name: 'ntv',
    sub: 50000
}, {
    name: 'atn',
    sub: 30000
}, {
    name: 'rtv',
    sub: 40000
}];

// INLINCE CALLBACK 
console.log(channels.find(function(element) {
    return element.sub === 40000
})) 

// ARROW FUNCTION
console.log(channels.find(element => element.name === 'ntv')) 

// CONCAT METHOD

let fname = ['kazi', 'shekh', 'rahman'];
let lname = ['arefin', 'tony', 'rashik'];
let fullName = fname.concat(lname)

console.log(fname.concat('shikdar'))
console.log(fname.concat(lname))

// SLICE METHOD
console.log(fullName.slice(2,5))

// SPREAD OPERATOR
let callName = [...fname,...lname]
console.log(callName)

// FOR LOOP IN ARRAY
for(let i = 0; i<fname.length; i++) {
    console.log(fname[i])
}
// FOR OF LOOP
for (let name of lname) {
    console.log(name)
}
// FOR EACH LOOP
fullName.forEach(function(name, index) {
    console.log(name, index)
})

// JOIN METHOD
let student = ['K','a','z','i']
console.log('Comma by default: ' + student.join())
console.log('No space: ' + student.join(''))
console.log('Using seperator: ' + student.join('_'))
console.log(student.join('='))
student = student.join('+')

// SPLIT METHOD
console.log(student.split('+'))

// FILTER METHOD

let cities = [
    {name: 'dhaka', pop: 2000000},
    {name: 'khulna', pop: 1000000},
    {name: 'jashore', pop: 500000}
];

console.log(cities.filter(city => city.pop > 500000))

// MAP METHOD

console.log('Using Map: ' + cities.map(city => city.pop * 2))

// ARRAY PRACTICE

const friends = [
    {
        name: 'shohag',
        height: '150',
        weight: '80',
        color: 'brown',
        gender: 'male'
    },
    {
        name: 'hemel',
        height: '145',
        weight: '70',
        color: 'white',
        gender: 'male'
    },
    {
        name: 'orchi',
        height: '140',
        weight: '65',
        color: 'white',
        gender: 'female'
    },
    {
        name: 'chayon',
        height: '147',
        weight: '60',
        color: 'brown',
        gender: 'male'
    }
];
// get an array of all name
const friendName = friends.map(frnd => frnd.name)
console.log(friendName)

// get an array of obj with name and height properties
const nameHeight = friends.map(frnd => {
    return {
        name: frnd.name,
        height: frnd.height
    }
})
console.log(nameHeight)

// get the total height of all character
const totalWeight = friends.reduce((prevWeight, character) => {
    return prevWeight + Number(character.weight);
},0);
console.log(totalWeight)

// get character with height greater than 145
const graterHeight = friends.filter((character) => {
    return character.height > 145
})
console.log(graterHeight)

// get all male character
const genderMale = friends.filter(character => character.gender == 'male')
console.log(genderMale)

// sort by name
const genderSort = friends.sort((ch1, ch2) => {
    if (ch1.name < ch2.name) {
        return -1;
    }
    if (ch1.name > ch2.name) {
        return 1;
    }
    return 0
})
console.log(genderSort)

// does every character have weight more than 65
console.log(friends.every(ch => ch.weight > 55))

// at least one male chracter
console.log(friends.some(ch => ch.gender))

// THIS KEYWORD

let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
    return {
        count: 0,
        increment: function() {
            this.count++;
        }
    }
}

counter.increment();
counter1.increment();
counter1.increment();
console.log(counter);
console.log(counter1);

var count = 0;
function incrementCounter() {
    this.count++;
}

incrementCounter();
incrementCounter();
console.log(count);