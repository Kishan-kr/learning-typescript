// A tuple is a special type of the array that allows us to define the exact types of elements and their order.

let tupleUser: [string, number];
tupleUser = ["Alice", 25];
// tupleUser = [25, "Alice"] // invalid

let optionalTuple: [string, number?];
optionalTuple = ["John"];

let student: [string, boolean, ...number[]];
student = ["Alice", true, 90, 85, 95];
student = ["Bob", false];

tupleUser.push(38); // allowed: an odd behaviour