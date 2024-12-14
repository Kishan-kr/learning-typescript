"use strict";
// a Getter must have a return type and it cannot have any parameters
// while a Setter cannot have a return type and can have only one parameter
// 'protected' access modifier allows a property to be accessed within the same class as well as within the class which is inheriting it.
class Person {
    constructor(name, personId, email) {
        this.name = name;
        this.personId = personId;
        this.email = email;
        // private method 
        this.getInitials = () => {
            return this.name[0];
        };
    }
    // getter method
    get getName() {
        return this.name;
    }
    // setter method 
    set setPersonId(id) {
        this.personId = id;
    }
}
class SubPerson extends Person {
    constructor() {
        super(...arguments);
        this.subName = '';
    }
    get getNameAndSubName() {
        // console.log(this.personId) // not accessible [private]
        return this.subName + this.email; // email accessible [protected]
    }
}
