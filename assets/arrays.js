// Manipulación de arreglos
var nombres = ["Ismael", "Ernesto", "Paulo", "Rosa"];
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.push("Lupita");
console.log(nombres);
nombres.shift();
console.log(nombres);
nombres.unshift("Dany");
console.log(nombres);

// Método forEach
let frutas = ["manzana", "banana"];
frutas.forEach(function(elemento,indice,array){
    console.log(elemento, indice,array);
})

// Método indexOf
console.log(nombres);
var indice = nombres.indexOf("Paulo");
console.log(indice);

// Método splice
nombres.splice(indice,1);