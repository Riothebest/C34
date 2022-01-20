class Bullet
{
    constructor(x,y,w,h)
    {
        var options ={
            isStatic: true,
            friction: 1,
            density: 1,
        }
        this.image = loadImage('./assets/laser.png');
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
        //this.angle = angle
        World.add(myWorld, this.body);
    }

    display()
    {
        var pos= this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle+270)
        imageMode(CENTER)
        image(this.image,0,0,100,100)
        pop();
    }

    shoot()
    {
        var randomangle = random(0,360)
       
        var loc = p5.Vector.fromAngle(randomangle);

        loc.mult(38);

       
        Matter.Body.setVelocity(this.body,{x:loc.x, y:loc.y});
        Matter.Body.setStatic(this.body, false);
    }
}