// a Getter must have a return type and it cannot have any parameters
// while a Setter cannot have a return type and can have only one parameter
// 'protected' access modifier allows a property to be accessed within the same class as well as within the class which is inheriting it.


class Person {
  constructor(public name: string, private personId: number, protected email: string){}

  // private method 
  private getInitials = (): string => {
    return this.name[0];
  }

  // getter method
  get getName(): string { 
    return this.name
  }

  // setter method 
  set setPersonId(id: number) {
    this.personId = id
  }
}

class SubPerson extends Person {
  subName: string = ''

  get getNameAndSubName(): string {
    // console.log(this.personId) // not accessible [private]
    return this.subName + this.email; // email accessible [protected]
  }
}