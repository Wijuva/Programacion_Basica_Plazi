var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujar_linea("blue", 0, 0, 100, 100)
dibujar_linea("yellow", 300, 100, 10, 300)

function dibujar_linea(color, xinicial, yincial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}