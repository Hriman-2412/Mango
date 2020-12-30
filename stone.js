class Stone{

constructor(x,y,width,height){

var options={
isStatic : false,
restitution : 0,
friction : 1,
density : 1.2

}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;


this.image = loadImage("Plucking mangoes/stone.png");
World.add(world,this.body);

}

display(){
push();
this.body.scale = 0.2;
this.image.scale = 0.2;
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,40,40);
pop();
}



}