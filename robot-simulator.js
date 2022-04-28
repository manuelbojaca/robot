export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

const directions = ["north", "east", "south", "west"];

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
    return [this.x, this.y];
  }

  turnRight() {
    if (this.location === "north") {
      this.orient("east");
      return;
    }
    if (this.location === "east") {
      this.orient("south");
      return;
    }
    if (this.location === "south") {
      this.orient("west");
      return;
    }
    if (this.location === "west") {
      this.orient("north");
      return;
    }
  }

  turnLeft() {
    if (this.location === "north") {
      this.orient("west");
      return;
    }
    if (this.location === "east") {
      this.orient("north");
      return;
    }
    if (this.location === "south") {
      this.orient("east");
      return;
    }
    if (this.location === "west") {
      this.orient("south");
      return;
    }
  }

  at(x, y) {
    this.x = x;
    this.y = y;
  }

  advance() {
    if(this.location === "north") {
      this.x = this.x;
      this.y = this.y + 1;
    }
    if(this.location === "east") {
      this.x = this.x + 1;
      this.y = this.y;
    }
    if(this.location === "south") {
      this.x = this.x;
      this.y = this.y - 1;
    }
    if(this.location === "west") {
      this.x = this.x - 1;
      this.y = this.y;
    }
  }

  static instructions(instruction) {

    return instruction.split('').map(function (item) {
        
        if(item === "L"){
          return "turnLeft";
        }
        if(item === "R"){
          return "turnRight";
        }
        if(item === "A"){
          return "advance";
        }
    });  
  
  }

  place(obj) {
    this.at(obj.x, obj.y);
    this.location = obj.direction;
  }

  evaluate(str) {
    let arr = this.constructor.instructions(str);

    arr.forEach((item) => {
      console.log('itemi', item);
      if (item === "turnRight") {
        this.turnRight();
        console.log('right');
      }
      if (item === "turnLeft") {
        this.turnLeft();
        console.log('left');
      }
      if (item === "advance") {
        this.advance();
        console.log('advance');
      }
      console.log('location: ', this.location, ' x: ', this.x, ' y: ', this.y);
    });  
  }
}
console.log(Robot);
