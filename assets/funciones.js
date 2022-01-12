var x = function(a,b){return a*b};

var z = x(4,3);

console.log(z);

// hoisting y return

rest(5,2);
function rest(a,b){
    return a-b;
}

//función autoinvocada
(function (){
    console.log("Holi Caracoli");
})();

(function (nombre){
    console.log("Holi Caracoli " + nombre);
})("Guillermo");

//función flecha
var x = function(x,y){
    return x*y;
}
console.log(x(2,3));

var y = (x,y) => x*y;
console.log(y(2,3)); //reduce código