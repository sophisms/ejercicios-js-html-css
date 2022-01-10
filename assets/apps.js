var length = 16;
var lastName = "Johnson";
var x = {firstName: "John", lastName: "Doe"};

console.log("El tipo de dato de 16 es: " + typeof(length));
console.log("El tipo de dato de 16 es: " + typeof(lastName));
console.log("El tipo de dato de 16 es: " + typeof(x));

console.log("El apellido del objeto es de tipo: " + typeof(x.lastName));

var a = 4+3+"volvo"; //detecta 4 y 3 como num
var y = "volvo"+3+4; //detecta 3 y 4 como char
console.log(y);