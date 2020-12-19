class BaseClass {
    constructor(x, y,width,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = width;
      this.height = height;
	  this.image = loadImage("sprites/base.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      

      fill("green");
     imageMode(CENTER);
	 image(this.image,0,0,this.width,this.height)
      pop();
    }
  };
  