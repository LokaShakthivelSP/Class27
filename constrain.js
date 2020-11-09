class Constrain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.constrain=Matter.Constraint.create(options);
        World.add(world,this.constrain);
    }
    display(){
        var pointA=this.constrain.bodyA.position;
        var pointB=this.constrain.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}