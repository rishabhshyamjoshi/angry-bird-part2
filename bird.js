class Bird {
  constructor(x, y, r) {
    const options = {
      'restitution': 0.1,
      'friction':0.1
    };
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.body, this.body.mass * 4);
    Matter.World.add(world, this.body);
    this.r = r;
   // this.smokeImage = loadImage("sprites/smoke.png");
    //this.trajectory =[];

  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(dotImg, 0, 0, this.r * 2, this.r * 2);

    //if(this.body.velocity.x > 0 && this.body.position.x > 0){
    //  var position = [this.body.position.x, this.body.position.y];
    //  this.trajectory.push(position);
    //}
//
   // for(var i=0; i<this.trajectory.length; i++){
   //   image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
  //  }

    pop();
    
  }
}
