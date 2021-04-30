class Slingshot
{

    constructor(bodyA,bodyB)
    {
            var options = 
            {
                bodyA : bodyA,
                bodyB : bodyB, 
                stiffness :0.3,
                length :10
            }
            this.bodyA=bodyA;
            this.bodyB=bodyB;
            this.sling=Matter.Constraint.create(options);
            World.add(world,this.sling);
    }

    display()
    {
        var pointA= this.bodyA.position;
        var pointB= this.bodyB.position ;
        

        strokeWeight(4);
        stroke("brown")

        //line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
        line(pointA.x,pointA.y, pointB.x,pointB.y);

    }
    
}