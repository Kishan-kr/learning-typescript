const user = {name: "Kishan", age: 25}; // TS is not useful here

function createUser({name: string, isPaid: boolean}) {}

// createUser() // give error
createUser({name: "Kishan", isPaid: true});

// createUser({name: "John", isPaid: false, age: 30}) // give error as createUser does not accept age param
let newUser = {name: "John", isPaid: false, age: 30};
createUser(newUser) //it works now: a weird behaviour

// returning objects from function 
function createProduct({name: string, price: number}): {}{
  return {};
}

function createCourse(): {name: string, price: number}{
  return {name: "React", price: 100};
}


// Type aliases 
type Product = {
  name: string,
  price: number,
  category: string
}

function buyProduct(product: Product) {}

function getProduct(product: Product): Product {
  return product;
}

// to use the buyProduct function we need to pass an object of type Product
buyProduct({name: 'Iphone 16', price: 1000, category: 'Electronics'});


// defining a type by combining existing types 
type cardNumber = {
  cardnumber: string
}

type cardDate = {
  carddate: string
}

// combining above two types [intersections]
type cardDetails = cardNumber & cardDate & {
  cvv: number
}

// creating an object of cardDetails type 
let card1: cardDetails = {
  carddate: '2025-12-12',
  cardnumber: '123456',
  cvv: 123
}


// 'readonly' modifier and optional property 
type Person = {
  readonly _id: string,
  name: string,
  age: number,
  cardDetails?: cardDetails // optional property 
}

let personA: Person = {
  _id: '12345',
  name: 'John Doe',
  age: 30
}

personA.age = 24 // allowed
// personA._id = '56789' // not allowed as it is readonly property


type Student = {
  name: string,
  class: string,
  readonly marks: number[]
}

let studentA: Student = {
  name: 'John Doe',
  class: '10th',
  marks: [90, 80, 70]
}

// studentA.marks = [79, 86, 82]; // cannot assign
studentA.marks.push(99); // allowed to push
studentA.marks.pop(); // allowed to pop


export {}