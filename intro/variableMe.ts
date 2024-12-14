let greetings: string = "Hello Kishan";
console.log(greetings);

// not allowed as 'greetings' is an string 
// greetings = 5; 

greetings.toLowerCase();

// number 
let score: number = 95;

// boolean 
let isAdmin: boolean = true;


// type inference 
let name = "Kishan" // string
// name = 67; // not allowed

let age = 25 // number
// age = "hello" // not allowed

export {} // to remove the error: Cannot redeclare block-scoped variable 'greetings'