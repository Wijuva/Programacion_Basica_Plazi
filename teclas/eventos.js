var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var x, y;
var movimiento = 2;
var colorcito = "blue";
var dibujar = false;

document.addEventListener("mousedown", clickMouse);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", soltarClick);

function clickMouse(clickDown) {
    console.log(clickDown)
    x = clickDown.clientX;
    y = clickDown.clientY;
    dibujar = true;
}

function dibujarMouse(movimientoMouse) {
    //console.log(movimientoMouse);
    if (dibujar == true) {
        dibujarLinea(colorcito, x, y, movimientoMouse.clientX, movimientoMouse.clientY, lienzo);
        x = movimientoMouse.clientX;
        y = movimientoMouse.clientY;
    }
}

function soltarClick(clickUp) {
    dibujar = false;
}

function dibujarLinea(color, xinicial, yincial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}