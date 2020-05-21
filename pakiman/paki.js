var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 80));
coleccion.push(new pakiman("Pokacho", 100, 120));
coleccion.push(new pakiman("Tocinauro", 100, 150));

for (const pokimanes of coleccion) {
    pokimanes.mostrar();
}