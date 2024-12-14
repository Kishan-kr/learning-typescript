abstract class AbstractModel {
  constructor(protected name: string, public email: string) {}

  // abstract method 
  abstract greet(wish: string): void;

  // method with its implementation [it makes abstract class different from interface]
  sayHello() {
    console.log('Hello, I am ', this.name);
  }
}

class RealUser extends AbstractModel {
  constructor(name: string, email: string) {
    super(name, email);
  }

  greet(wish: string): void {
      console.log(`${this.name} says: ${wish} ${this.email}`);
  }

  // overriding sayHello method 
  sayHello(): void {
      console.log('Hello, I am ', this.name, ' and my email is ', this.email);
  }
}

const anuj = new RealUser('Anuj', 'anuj@example.com');
anuj.sayHello(); // Hello, I am  Anuj and my email is  anuj