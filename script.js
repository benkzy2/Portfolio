// Variables
let name = 'Benjamin';
console.log(name);

// Constants
const matricNo = 107660;
console.log(matricNo);

// Primitive Types
let university = 'UNIMAS'; // String
let age = 24;              // Number
let isStudent = true;      // Boolean
console.log(university, age, isStudent);

// Objects
let student = {
    name: 'Benjamin Kuek Zuo Yong',
    matricNo: 107660,
    course: 'Computer Science and Technology (Multimedia Computing)'
};
console.log(student.name);       // dot notation
console.log(student['course']);  // bracket notation

// Arrays
let hobbies = ['Playing games'];
hobbies[1] = 'Watching movies';
console.log(hobbies);
console.log(hobbies.length);

// Functions (performing a task)
function greet(name) {
    document.getElementById('greeting').innerHTML = 'Hello, welcome to ' + name + '\'s page!';
}

greet(name);

// Functions (calculating a value)
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(fullName('Benjamin', 'Kuek'));

// Buttons
function changeText() {
    document.getElementById('about').innerHTML = 'I am a student learning HTML and JavaScript.';
}

function changeColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function sayHi() {
    alert('Thank you for visiting my page!');
}
