// An interface is a way to define the shape of an object, describing its properties and methods.

interface User {
  readonly dbId: number
  email: string
  userId: number
  googleId?: string

  startTrial: () => string
  // OR
  // startTrial(): string

  getCoupon(couponname: string, value: number): number
}

// Declaration merging or adding new properties 
interface User {
  githubId: number
}

// Inheritance or extending an interface 
interface Person {
  name: string,
  age: number,
}

interface Student extends Person {
  studentId: number,
  subjects: string[],
}

const kishan: User = {
  dbId: 3344,
  email: 'kishan@gmail.com',
  userId: 1234,
  githubId: 8878,

  startTrial() {
    return 'Trial started';
  },
  getCoupon(name: "KISH99", off: 99) {
    return off;
  }
}

const studentBob: Student = {
  name: 'Bob',
  age: 25,
  studentId: 1234,
  subjects: ["TS", "JS", "React"],
}

export {}