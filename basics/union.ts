let id: number | string ;
id = 4;
id = "4";

// union of user defined types 
type User = {
  name: string,
  id: string
}

type Admin = {
  username: string,
  id: string
}

// let kishan: User = {
//   name: "kishan",
//   id: '123'
// }

// kishan = {
//   username: "kk", // invalid
//   id: '123'
// }

let kishan: User | Admin = {
  name: "kishan",
  id: '123'
}

kishan = {
  username: "kk", // valid
  id: '123'
}


// union in arrays 
let data: number[] = [1, 3, 4];
let data2: string[] = ["1", "2", "3"];

// let data3: number[] | string[] = [1, 3, 4, "5"]; // cannot have values of both type
let data4: number[] | string[] = [1, 3, 4]; // valid

let data5: (number | string)[] = [1, 3, 4, "5"]; // can have values of both type

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew" // invalid
