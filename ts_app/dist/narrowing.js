"use strict";
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 5;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}
// in below function: we may no longer be handling the empty string case correctly 
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
// narrowing using 'instanceof' operator 
// it works with objects created using 'new' keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function whatPetCanDo(pet) {
    if (isFish(pet)) {
        return pet.swim();
    }
    return pet.fly();
}
// type Shape = Circle | Square | Rectangle;
function getDiscriminatedArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side ** 2;
}
// exaustiveness checking 
function getExaustiveCheckedArea(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * shape.radius ** 2;
        case 'square': return shape.side ** 2;
        // case 'rectangle': return shape.length * shape.width;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// if any a new member to the Shape union will be added, will cause a TypeScript error
// so we'll have to update the exhaustive check, i.e., add a new case to the switch statement.
