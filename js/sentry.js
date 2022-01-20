class Sentry
{
    constructor(x,y,w,h)
    {
        this.x = x
        this.y = y
        this.h = h
        this.w = w
        this.angle= PI/4
        var options={
            isStatic: true,
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h,options);
        World.add(myWorld, this.body);
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.x,this.y)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
        
    }
}