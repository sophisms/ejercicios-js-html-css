/*Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido".
*/
var dayNumber = parseInt(prompt("Ingresa el número del día: "));

if (dayNumber == 0){
    console.log("Domingo");
}
else if(dayNumber == 1){
    console.log("Lunes");
}
else if(dayNumber == 2){
    console.log("Martes");
}
else if(dayNumber == 3){
    console.log("Miércoles");
}
else if(dayNumber == 4){
    console.log("Jueves");
}
else if(dayNumber == 5){
    console.log("Viernes");
}
else if(dayNumber == 6){
    console.log("Sábado");
}
else{
    console.log("El número de día es inválido");
}