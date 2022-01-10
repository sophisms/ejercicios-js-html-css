// Triángulo
var b_tri = 5;
var a_tri = 6;

function triangulo() {
    area_tri = (b_tri*a_tri)/2;
    alert("El área del triángulo es: " + area_tri);
}
triangulo();

// Círculo
var pi = 3.1416;

function circulo(radio) {
    var area_circulo = pi*(radio*radio);
    alert("El área del círculo es: " + area_circulo);
}
circulo(2);

// Rectángulo
function rectangulo(b,h) {
    var b = 2;
    var h = 8;
    var area_rect = b*h;
    alert("El área del rectángulo es: " + area_rect);
}
rectangulo();