let walker;

function setup() {
  createCanvas(640,360);
  walkerR = new Walker(width/2, height/2, 0.4, 0.6, 0.8);
  walkerL = new Walker(width/2, height/2, 0.2, 0.6, 0.8);
  walkerU = new Walker(width/2, height/2, 0.2, 0.4, 0.6);
  walkerD = new Walker(width/2, height/2, 0.2, 0.4, 0.8);
  walkerUR = new Walker(width/2, height/2, 0.4, 0.5, 0.6);
  walkerUL = new Walker(width/2, height/2, 0.1, 0.5, 0.6);
  walkerDR = new Walker(width/2, height/2, 0.4, 0.5, 0.9);
  walkerDL = new Walker(width/2, height/2, 0.1, 0.5, 0.9);
  background(127);
}

// why does one of them not work right?
function draw() {
  walkerR.run();
  walkerL.run();
  walkerU.run();
  walkerD.run();
  walkerUR.run();
  walkerUL.run();
  walkerDR.run();
  walkerDL.run();
}


class Walker{
  // takes the range of values 0 < var < 1
  //  that determine the probablility that
  //  the particle will move in any direction
  constructor(x, y, probRt, probLt, probDn){
    this.x = x;
    this.y = y;
    this.r = probRt;
    this.l = probLt;
    this.d = probDn;
    this.db = debug;
  }

 render() {
    stroke(0);
    point(this.x, this.y);
  }

  step(){
    let choice = floor(random(4));
    let r = random(1);

    // move right
    if (r < this.r) {
      this.x++;
    // move left
    } else if (r < this.l) {
      this.x--;
    // move down
    } else if (r < this.d) {
      this.y++;
    } else {
    // move up
      this.y--;
    }

    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }

  run() {
    this.render();
    this.step();
  }
}
