class Juego{
 constructor(){
   this.personaje = new Personaje(50, 50);
   this.enemigo = new Enemigo(120, 50);
   this.crearLaberinto();
 }
 
 dibujar(){
   this.personaje.mover();
   this.personaje.dibujar();
   
   this.enemigo.mover(this.personaje.posX, this.personaje.posY); //para que el enemigo persiga al personaje
   this.enemigo.dibujar();
 }
 
 iniciar(){
   
 }
 
 reiniciar(){
    this.personaje = new Personaje();
    this.enemigo = new Enemigo();
 }
 
 crearLaberinto(){
   
 }
}
