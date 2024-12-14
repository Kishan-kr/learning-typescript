// An enum allows us to define a set of named contants, which can be numeric or string-based.

enum Direction {
  up,
  down,
  left,
  right,
};

let walkUp = Direction.up // walkUp = 0
let walkLeft = Direction.left // walkLeft = 2

enum Status {
  success = "SUCCESS",
  failure = "FAILURE",
  pending = "PENDING",
};
let responseStatus = Status.success // "SUCCESS"

// custom values
enum seatChoices {
  aisle = 1,
  window, // 2
  middle = 10,
  crew, // 11
}

// constant enum 
const enum DifficultyLevel {
  easy = "EASY",
  medium = "MEDIUM",
  hard = "HARD",
};
let gameLevel = DifficultyLevel.hard;