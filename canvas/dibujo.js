var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 300;
var l = 0;
var aumento = 5;

dibujar_linea("black", 1, 1, 299, 1);
dibujar_linea("black", 1, 1, 1, 299);
dibujar_linea("black", 299, 1, 299, 299);
dibujar_linea("black", 1, 299, 299, 299);

while (l < lineas) {
    dibujar_linea("blue", 0, l, aumento + l, 300);
    l = l + aumento;
}

for (let l = 0; l < lineas; l = l + aumento) {
    dibujar_linea("red", l, 0, 300, aumento + l);
}

function dibujar_linea(color, xinicial, yincial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}