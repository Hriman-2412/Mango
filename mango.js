class Mango{

constructor(x,y,radius){

var options={

isStatic : true,
restituion : 0,
friction : 1

}

this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;


this.image = loadImage("Plucking mangoes/mango.png");
World.add(world,this.body);


}


display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
    
    
    
    
    














}