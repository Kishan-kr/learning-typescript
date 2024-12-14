function detectType(val: number | string) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  }
  return val + 5;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return
  }
  return id.toLowerCase();
}

// in below function: we may no longer be handling the empty string case correctly 
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

// narrowing using 'in' operator 
interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}

// narrowing using 'instanceof' operator 
// it works with objects created using 'new' keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


// using type predicate 
// A type predicate is a custom function that tells TypeScript what type a value is.
// When used, it helps TypeScript narrow the type, making your code safer and easier to write.
// The syntax is: paramName is Type.
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function whatPetCanDo(pet: Fish | Bird) {
  if(isFish(pet)) {
    return pet.swim();
  }
  return pet.fly();
}


// Discriminated unions 
interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number
}

type Shape = Circle | Square;
// type Shape = Circle | Square | Rectangle;

function getDiscriminatedArea(shape: Shape) {
  if(shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side ** 2;
}

// exaustiveness checking 
function getExaustiveCheckedArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle': return Math.PI * shape.radius ** 2;
    case 'square': return shape.side ** 2;
    // case 'rectangle': return shape.length * shape.width;
    default: 
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
// if any a new member to the Shape union will be added, will cause a TypeScript error
// so we'll have to update the exhaustive check, i.e., add a new case to the switch statement.