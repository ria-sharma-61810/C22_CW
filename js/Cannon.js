class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannonimage=loadImage("./assets/cannonBase.png")
    this.poleImage=loadImage("./assets/canon.png")
    
  }
  show(){
    push();
    imageMode(CENTER);
    image(this.Cannonimage,this.x,this.y,this.width,this.height);
    pop();
    image(this.poleImage,130,140,150,100)
  }
  
}
