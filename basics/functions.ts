function addFive(num: number) {
  return num + 5;
}

function getUpper(str: string) {
  return str.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {
  // logic to sign up
}

let login = (name: string, email: string, isPaid: boolean = false) => {
  // logic to login 
}

addFive(2);
// addFive('2') // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
getUpper("typescript");
signUp("John", "john@example.com", true);
login("John", "john@example.com"); // accepted with only two params as isPaid is optional


// functions with return type 
function addTen(num: number): number {
  return num + 10;
}

let addTwenty = (num: number): number => {
  // return "twenty"; // not allowed
  return num + 20;
}

// good practice to explicit mention 'void' as return type function does not return anything 
function consoleError(errMsg: string): void {
  console.error(errMsg);
}

// it never returns anything 
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {}