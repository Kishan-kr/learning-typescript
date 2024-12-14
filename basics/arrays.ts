const heroes = [];
// heroes.push('spiderman'); // not assigable as heroes is of type 'never'

// const superHeroes: string[] = []; // case 1
// OR 
const superHeroes: Array<string> = []; // case 2: both cases are same 

superHeroes.push('batman');

// array of user defined types 
type User = {
  name: string,
  age: number
}

const students: User[] = [];
students.push({ name: 'John', age: 20 }); // valid

// array of arrays 
const cordinates: number[][] = [
  [2, 4, 6],
  // ["a", "b", "c"] // invalid
]

export {}