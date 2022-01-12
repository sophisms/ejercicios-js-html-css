// Exercise #1

var transaction = parseInt(prompt("¿Cuántas transacciones hiciste?"));
var total = parseInt(prompt("¿Cuál es el monto total?"));

function cost(fee, total){
    //Comission
    var comision =  fee*3;
    console.log("Número de transacciones: " + fee + " * $3 = $" + comision);
    //Total + comission
    var sum = total + comision;
    console.log("Monto: $" + total + " + $" + comision + " = $" + sum);
    // Total + interest fee
    var interest = sum*0.01;
    var total_interest = sum + interest;
    console.log("Intereses: $" + sum + " * 0.01 = $" + interest);
    console.log("Total con intereses: $" + total_interest);
}
cost(transaction,total);

// Exercise #2
//Part 1
var nombre1 = prompt("Escribe el nombre de tu primer amigo:");
var nombre2 = prompt("Escribe el nombre de tu segundo amigo:");
var nombre3 = prompt("Escribe el nombre de tu tercer amigo:");

ejercicio2Parte1(nombre1,nombre2,nombre3);

function ejercicio2Parte1(nom1,nom2,nom3){
    console.log("Bienvenido "+nom1+", "+nom2+", "+nom3);
    return;
}

//Part 2
function ejercicio2Parte2 (){
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    console.log(añoActual);// Devuelve la fecha actual
    var nacimiento = prompt("¿En qué año naciste?");//Almacena el año de nacimiento
    años = añoActual - nacimiento;//Diferencia de fechas
    alert("Tu año de nacimiento es: "+nacimiento+" y tienes: "+años+" años");
}

ejercicio2Parte2();

//Part 3
var edad1 = parseInt(prompt("¿Cuántos años tiene " + nombre1 + "?"));
var edad2 = parseInt(prompt("¿Cuántos años tiene " + nombre2 + "?"));
var edad3 = parseInt(prompt("¿Cuántos años tiene " + nombre3 + "?"));
function ejercicio3(){
    console.log("Welcome: " + nombre1 +", your age is " + edad1);
    console.log("Welcome: " + nombre2 +", your age is " + edad2);
    console.log("Welcome: " + nombre3 +", your age is " + edad3);
}
ejercicio3();

// Challenge yourself
//Part 1

var rubrica = parseInt(prompt("Rubrica: "));

function pass(){
    if(rubrica==11){
        console.log("Perfect");
    }
    else if(rubrica>8){
        console.log("Excellent");
    }
    else if(rubrica>=5){
        console.log(true);
    }
}

pass();