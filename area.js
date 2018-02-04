/*1.- calcular la distancia entre dos puntosm, con coordenadas*/
/*2.- definir tipo de clase o prototipos que existe en js para 
definir los puntos 
*/
/*function Punto (x, y){
this.x = x
this.y = y
}
Punto.prototype.moverEnX= function moverEnX(x){
 this.x +=x
}
Punto.prototype.moverEnY= function moverEnY(y){
	this.y += y 
}
//logica entre mover dos puntos que le va a llevar por parámetro

Punto.prototype.distancia = function distancia (p){
const x = this.x - p.x
const y = this.y - p.y
return Math.sqrt(x*x + y*y) 
}
*/

/*2.- manera de crear objetos*/
// crear un nuevo objeto Punto, antes era una funcioin
/*const Punto = {
init: function init(x, y) {
this.x = x
this.y = x
 },
 moverEnX: function moverEnX(x){
 this.x += x
 },
 moverEnY: function moverEnY(y){
 this.y +=  y
 },
 distancia: function distancia(p){
  const x = this.x - p.x
  const y = this.y - p.y
return Math.sqrt(x*x + y*y) 
 }
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)
p1.init (0,4)
p2.init (3,0)


//se le ponen atributos
 console.log (p1. distancia (p2))
 console.log (p2. distancia (p1))
 p1.moverEnX(10)
 console.log (p1. distancia(p2))
 p2.moverEnX(-4) 
 console.log (p1. distancia(p2))*/
 
/*
3.- manera de crear objetos*/


class Punto {
	constructor (x,y){
	this.x = x
	this.y = y
  }
   moverEnX (x){
	this.x += x
  }
    moverEnY (y){
	this.x += y
  }
	distancia (p){
  const x = this.x - p.x
  const y = this.y - p.y
  return Math.sqrt(x*x + y*y)
	}
 }

const p1 = new Punto (0,4)
const p2 = new Punto (3,0)
//se le ponen atributos
 console.log (p1.distancia(p2))
 console.log (p2.distancia(p1))
 p1.moverEnX(10)
 console.log (p1.distancia(p2))
 p2.moverEnX(-4) 
 console.log (p1.distancia(p2))