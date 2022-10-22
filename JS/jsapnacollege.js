// let helloButton = document.querySelector('button');
// helloButton.addEventListener('click', showMessage);

// function showMessage() {
//     alert("Have a grerat day!");
// }



// TAKING USER INPUT

let rollButton = document.querySelector('button');
rollButton.addEventListener('click', inputMessage);

function inputMessage() {
    let name = prompt('Enter name of student');
    rollButton.textContent = 'Roll No. 1: ' + name;
}
