/*1.. resolver suma*/
function suma  (... numeros) {
	let acum = 0
	for (let i = 0; i<numeros.length; i++){
		acum += numeros[i]
	}
  return  acum
 }
 suma (4,8,13,67,5)

 /*2.- segunda forma de resolver suma: reduce */

 function suma  (... numeros) {
 return  numeros.reduce(function(acum, numero){
   	acum += numero
    return acum
  }, 0 )
 }
 suma (4,8,13,67,5)

/*3.- una cantidad de números me devuelva un array
con la doble cantidad de números*/

function doblenumero(...numero){
	const resultado = []
	for (let i = 0; i<numero.length; i++){
		resultado.push(numero[i] *2)
	}
	return resultado
}
 doblenumero (4,8,13,67,5)

/*4.-  escritura  con el métido map.*/
function doblenumero(...numero){
	return numero.map(function (numero){
		return numero * 2
	})
}
 doblenumero (4,8,13,67,5)
/*
 - usando =>*/
const doblenumero = (...numero) => numero.map(numero =>  numero * 2)

 doblenumero (4,8,13,67,5)

/* 5.- metodo array: filter */
	
function pares (...numero){
   const resultado = []
   const length = numeros.legth
   for (let i= 0; i<length; i++){
   	const numero = numeros[i]
   	if(numero % 2 == 0){
   	resultado.push(numero)
   }
 }
 return resultado 
}
 pares(4,8,13,67,5)