// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
//
// modified by Casey Nord
// for the purpose of education


let walker;

function setup() {
  createCanvas(640, 360);
  walker = new Walker(width/2, height/2);
  background(127);
}

function draw() {
  walker.run();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let choice = floor(random(4));

    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }

    this.x = constrain(this.x, 0, width-1);
    this.y = constrain(this.y, 0, height-1);
  }

  run() {
    this.render();
    this.step();
  }

}
