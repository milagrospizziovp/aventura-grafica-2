class Personaje{
 constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.velocidad = 3;
  this.tam;
  this.vida = 1;
 }
 
 dibujar(){
   fill(0,0,255);
   rect(this.posX, this.posY, 30, 30);
 }
 
 mover(){ //esto con keyCode
   if(keyCode === LEFT_ARROW){
     this.posX -= this.velocidad;
   } else if(keyCode === RIGHT_ARROW){
     this.posX += this.velocidad;
   } else if(keyCode === UP_ARROW){
     this.posY -= this.velocidad;
   } else if(keyCode === DOWN_ARROW){
     this.posY += this.velocidad;
   } else if(key == ' '){
     this.personaje.quieto();
   }
 }
 
 quieto(){ //para que se detenga
   
 }
 
 
}
