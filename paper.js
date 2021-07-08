class Paper{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{restitution:0.3,
        isStatic:false,
        density:1.2,
        friction:0.5
        });
        this.radius=radius;
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }


}