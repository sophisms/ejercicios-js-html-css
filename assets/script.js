// Usar alertas para verificar que el script está vinculado al HTML
/*
alert ("Estoy vivo");
console.log("Este es un mensaje para la consola");

var nombre = "Sofia";
var apellidos = "Aguilar Valdez";
var edad = 23;

console.log(nombre, apellidos, edad);

alert("Mi nombre es " + nombre);
console.log("Mis apellidos son: " + apellidos);
*/

// Declaración de funciones
/*
function Saludar(){
    alert ("Hola a todos");
}

Saludar();

// Expresión de función

var cantar = function(){
    alert ("A mi me gusta cantar");
}
cantar ();

// Función sin parámetros
function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("La suma de la función sin parámetros es: " + suma);
}
sumar ();

// Función con parámetros
function restar (num1,num2,resta) {
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert("La resta de la función con parámetros es: " + resta);
}
restar();

// Otra función con parámetros 
function cuadrado (cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del número es: " + rescuadrado);
}
cuadrado(4);

function Operaciones (num1,num2,num3,suma,resta,multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert ("La suma es: " + suma + ", la resta es: " + resta + ", la multiplicación es: " + multi);
}
Operaciones(5,6,7);
*/

// Función Prompter
/*
function Prompter(){
    var respuesta = prompt("Buenos días, ¿cuál es tu nombre?");
    alert ("Es un gusto saludarte " + respuesta);
}
Prompter();

function areaCuadrado(){
    var datoingresado = prompt("Ingresa un número");
    var resultado = datoingresado*datoingresado;
    alert ("El área del cuadrado es " + resultado);
}
areaCuadrado();
*/

// Botones
function confirmacion(){
    var pregunta = confirm("Deseas visitar Google.com y buscar fotos de perritos?");
    if (pregunta){
        alert("Te enviaré rápidamente")
        window.location = "https:www.google.com";
    }
    else{
        alert("No hay problema, nos vemos luego");
    }
}

// getElementByID
function cambiarColor(nuevoColor){
    var elem = document.getElementById("parrafo");
    elem.style.color = nuevoColor;
}

function Accion(tipo){
    var elem = document.getElementById("DivBotones");
    if (tipo == "Ocultar"){
        elem.style.display = "None";
    }
    else{
        elem.style.display = "";
    }
}

// Tipos de datos
/* "Objetos" son como diccionarios. Pueden contener diferentes tipos de datos */
var auto = {
            marca:"Ford", 
            cilindros:8,
            transmisión:"automático",
            tapiz:{
                color:"beige",
                textura:"fibrosa",
                material:"sintético"
            }
            } //no tienen un orden