// Generics are a way to create reusable type safe components, functions, or classes that work with a variety of types while still enforcing type constraints.

// It allows to define type variables that act as placeholders for actual types, which are specified when the component is used.

// it can return any of number or string
function identity1(value: number | string): number | string {
  return value;
}

// it can accept a number and return other than number also 
function identity2(value: any): any {
  return value;
}

function identity3<T>(value: T): T {
  return value;
}

// array of generic type 
function getSearchProducts<T>(products: T[]): T {
  // do some database or searching operations 
  const index = 4; // got product index
  return products[index];
}

// above function using arrow function syntax 
const getSearchProductsArrow = <T>(products: T[]): T => {
  // do some database or searching operations 
  const index = 4; // got product index
  return products[index];
}

interface Notebook {
  brand: string,
  pages: number
}

const camlinNotebook: Notebook = {brand: "Camlin", pages: 180};

const num = identity3<number>(5);
const num2 = identity3(6);
const str = identity3('hello');
const notebook = identity3<Notebook>({brand: 'Classmate', pages: 120});
const camlinIdentity = identity3(camlinNotebook);