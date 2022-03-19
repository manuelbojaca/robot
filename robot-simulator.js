export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

const directions = ["east", "west", "north", "south"];

export class Robot {
  orient(position) {
    if (!directions.includes(position)) {
      throw new InvalidInputError("wrong error");
    } else {
      this.location = position;
    }
  }

  get bearing() {
    return this.location;
  }

  get coordinates() {
    //Delete and write code
  }

  turnRight() {
    //Delete and write code
  }

  turnLeft() {
    //Delete and write code
  }

  at() {
    //Delete and write code
  }

  advance() {
    //Delete and write code
  }

  static instructions() {
    //Delete and write code
  }
  place() {
    //Delete and write code
  }
  evaluate() {
    //Delete and write code
  }
}
