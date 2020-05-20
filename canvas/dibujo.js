var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujo_por_click);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho_canvas = d.width;

function dibujar_linea(color, xinicial, yincial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujo_por_click() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var aumento = ancho_canvas / lineas;

    dibujar_linea("black", 1, 1, ancho_canvas - 1, 1);
    dibujar_linea("black", 1, 1, 1, ancho_canvas - 1);
    dibujar_linea("black", ancho_canvas - 1, 1, ancho_canvas - 1, ancho_canvas - 1);
    dibujar_linea("black", 1, ancho_canvas - 1, ancho_canvas - 1, ancho_canvas - 1);

    while (l < ancho_canvas) {
        dibujar_linea("blue", 0, l, aumento + l, ancho_canvas);
        l = l + aumento;
    }

    for (let l = 0; l < ancho_canvas; l = l + aumento) {
        dibujar_linea("red", l, 0, ancho_canvas, aumento + l);
    }
}