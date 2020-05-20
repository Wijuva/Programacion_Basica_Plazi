var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var x = 150;
var y = 150;
var movimiento = 2;
var colorcito = "blue";

document.addEventListener("keydown", dibujarTeclado)

function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujar_linea(colorcito, x, y, x - movimiento, y, lienzo)
            x = x - movimiento
            break;

        case teclas.UP:
            dibujar_linea(colorcito, x, y, x, y - movimiento, lienzo)
            y = y - movimiento;
            break;

        case teclas.RIGHT:
            dibujar_linea(colorcito, x, y, x + movimiento, y, lienzo)
            x = x + movimiento;
            break;

        case teclas.DOWN:
            dibujar_linea(colorcito, x, y, x, y + movimiento, lienzo)
            y = y + movimiento;
            break;


        default:
            break;
    }
}

function dibujar_linea(color, xinicial, yincial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}