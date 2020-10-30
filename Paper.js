class Paper{

    constructor(x,y,width,height){

        var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }

        this.paper = Bodies.circle(x,y,50,50);
        World.add(world,this.paper);
        


    }

    display(){

        ellipseMode(CENTER);
        ellipse(this.paper.position.x,this.paper.position.y,50,50);



    }




}