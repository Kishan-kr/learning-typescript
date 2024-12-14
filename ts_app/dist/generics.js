"use strict";
// Generics are a way to create reusable type safe components, functions, or classes that work with a variety of types while still enforcing type constraints.
// It allows to define type variables that act as placeholders for actual types, which are specified when the component is used.
// it can return any of number or string
function identity1(value) {
    return value;
}
// it can accept a number and return other than number also 
function identity2(value) {
    return value;
}
function identity3(value) {
    return value;
}
// array of generic type 
function getSearchProducts(products) {
    // do some database or searching operations 
    const index = 4; // got product index
    return products[index];
}
// above function using arrow function syntax 
const getSearchProductsArrow = (products) => {
    // do some database or searching operations 
    const index = 4; // got product index
    return products[index];
};
const camlinNotebook = { brand: "Camlin", pages: 180 };
const num = identity3(5);
const num2 = identity3(6);
const str = identity3('hello');
const notebook = identity3({ brand: 'Classmate', pages: 120 });
const camlinIdentity = identity3(camlinNotebook);
