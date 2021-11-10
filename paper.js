class paper{

    constructor(x,y,width,heigth)
    {

   
var options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
        this.x=x;
		this.y=y;
		this.width=width
		this.heigth=heigth
 		World.add(world, this.body);
 }
display(){

//Renomear nome da posição da caixa
var position = this.body.position;
function keypressed() {
if (keyCode === UP_ARROW){

Matter.body.applyforce(paperObject.body,paperObject.body.position,{x:130,y:-145})

}
}
}
}