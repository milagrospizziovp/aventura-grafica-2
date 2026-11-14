class Enemigo{
 constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.velocidad = 2;
  this.tam;
 }
 
 dibujar(){
   fill(255,0,0);
   rect(this.posX, this.posY, 30, 30);
 }
 
 mover(posXPersonaje, posYPersonaje){ //aca hay que resolver que siga al detective
   if(this.posX < posXPersonaje){
     this.posX += this.velocidad;
   } else if(this.posX > posXPersonaje){
     this.posX -= this.velocidad;
   }
   
   if(this.posY < posYPersonaje){
     this.posY += this.velocidad;
   } else if(this.posY > posYPersonaje){
     this.posY -= this.velocidad;
   }
 }
}
