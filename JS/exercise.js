// // OBJECT PRACTICING

// const product = {
//     itemName: 'Flower',
//     price: 50,
//     discount: 20,
//     itemCode: 'F40'
// }

// // CREATING OBJECT WITH FACTORY FUNCTION

// function createProduct(name, price, discount, itemCode) {
//     return {
//         itemName: name,
//         price: price,
//         discount: discount,
//         itemCode: itemCode
//     }
// }

// // OBJECT FOOTBALL HAS BEEN CREATED - NEW PRODUCT ADDED 

// const football = createProduct('football', 400, 10, 'F30')

// // CREATING OBJECT WITH CONSTRUCTOR FUNCTION

// function Product(name, price, discount, itemCode) {
//     this.itemName = name;
//     this.price = price;
//     this.discount = discount;
//     this.itemCode = itemCode;
//     // METHOD TO COUNT DISCOUNT
//     this.discountValue = function() {
//         return price * discount / 100;
//     }
// }

// // CREATING NEW PRODUCT FOR THE OBJECT

// const mobile = new Product('I Phone 14', 100000, 5, 'M10');

// // CLASS
// // DECLARING

// class Product {
//     constructor(itemName, price, discount, productCode) {
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// let pencil = new Product('Pencil', 20, 2, 'P10');



// // USING EXPRESSIION
// const Product1 = class Product {
//     constructor(itemName, price, discount, productCode) {
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     // GETTER SETTER
//     get getDiscountValue() {
//         return this.discount;
//     }
//     set setDiscountValue(value) {
//         this.discount = value;
//     }
//     // METHOD DEFINITION
//     discountValue() {
//         return this.discount * this.price / 100;
//     }

// }

// let chair1 = new Product1('Chair', 500, 15, 'C10');


// class Product {
//     constructor(itemName) {
//         this.itemName = itemName;
//     }

//     getItemName() {
//         return this.itemName + ' is a product';
//     }
// }
// // EXTENDING CLASS

// class Furniture extends Product {
//     constructor(itemName) {
//         super(itemName);
//     }

//     getItemName() {
//         return this.itemName + ' is a furniture';
//     }
// }

// let pencil1 = new Product('Pencil');
// let chair = new Furniture('Chair');

// ARRAYS

const arrays = [1,2,3,4,5,6,7,8,9];
console.log(arrays)
console.log(arrays[4])
console.log(arrays[arrays.length-1])

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

