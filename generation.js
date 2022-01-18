alert("Este programa decide si puedes entrar a Generation con base en tu edad");
var nombre = prompt("Ingresa tu nombre: ");
console.log("¡Hola, " + nombre + "!");

function pass(){
    var birthday = parseInt(prompt("¿Cuántos años tienes?"));
    if (birthday >=18){
        alert("¡Felicidades, cumples con los requisitos para ser aceptado en el Bootcamp Java Full Stack de Generation");
        console.log("Tienes " + birthday + ", por lo que fuiste aceptado. ¡Felicidades!");
    }
    else{
        alert("Lo sentimos, no cumples con los requisitos para el programa");
        console.log("Tienes " + birthday + ", por lo que no cumples con los requisitos");
    }
}
pass();

