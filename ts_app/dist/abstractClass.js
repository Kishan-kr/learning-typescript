"use strict";
class AbstractModel {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // method with its implementation [it makes abstract class different from interface]
    sayHello() {
        console.log('Hello, I am ', this.name);
    }
}
class RealUser extends AbstractModel {
    constructor(name, email) {
        super(name, email);
    }
    greet(wish) {
        console.log(`${this.name} says: ${wish} ${this.email}`);
    }
    // overriding sayHello method 
    sayHello() {
        console.log('Hello, I am ', this.name, ' and my email is ', this.email);
    }
}
const anuj = new RealUser('Anuj', 'anuj@example.com');
anuj.sayHello(); // Hello, I am  Anuj and my email is  anuj
