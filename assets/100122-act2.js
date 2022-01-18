var elementos = ["Carbono", "Oxígeno", "Hierro"];

var simbolo = ["C", "O", "Fe"];

var num_atomico = [6,8,26];

// Accesando a través de los índices
var tabla_per = [elementos,simbolo,num_atomico];

console.log(tabla_per);

var tabla_per=[[elementos],[simbolo],[num_atomico]];

// Concatenando datos en vez de variables
console.log(`El ${tabla_per[0][0]}`);

console.log(`El ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su número atómico es ${tabla_per[2][0]}`);

// Ejemplo
var tabla_per=[[["Sofía","Aguilar"],"Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];

