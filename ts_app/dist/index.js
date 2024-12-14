"use strict";
// Steps to create this project 
// 1. Create a new directory and open it
// 2. type the following command to create a 'tsconfig' file: tsc --init 
// 3. Initialize a node project using: npm init -y
// 4. Create folders 'src' and 'dist'
// 5. Create 'index.html' file in root directory 
// 6. Add script tag in 'index.html' to link 'dist/index.js' file
// 7. Modify the 'outDir' property in tsconfig file to './dist'
// 8. Create 'index.ts' file in 'src' folder and add any code to it.
// 9. Run the following command to compile TS in watch mode: tsc -W 
console.log('Hola Typesript');
console.log("Typescript is Amazing!");
// Classes in TS 
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "Darbhanga";
    }
}
class Student {
    constructor(name, grade, studentId) {
        this.name = name;
        this.grade = grade;
        this.studentId = studentId;
    }
}
// shortcut to declare classes 
class Animal {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const kishan = new User("Kishan", "k@k.com");
// kishan.city = "New Delhi" // cannot assign 
const alice = new Student("Alice", 8, "1234");
// console.log(alice.studentId); // cannot access here [private]
const lion = new Animal('L123', 'Lion');
// console.log(lion.id) // cannot access here [private]
