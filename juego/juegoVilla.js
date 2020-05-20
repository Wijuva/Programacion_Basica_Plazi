var jv = document.getElementById("villaLienzo");
var papel = jv.getContext("2d");
var posicionX;
var posicionY;

var fondo = {
    url: "tile.png",
    cargaOk: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOk: false,
    cantidadMaxima: 20
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    cantidadMaxima: 30
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

var pollo = {
    url: "pollo.png",
    cargaOk: false,
    cantidadMaxima: 50
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function valorAleatorio(minimo, maximo) {
    var aleatorio = Math.floor((maximo - minimo + 1) * Math.random() + minimo);
    return aleatorio;
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        dibujarAnimales(vaca)
    }
    if (cerdo.cargaOk) {
        dibujarAnimales(cerdo);
    }
    if (pollo.cargaOk) {
        dibujarAnimales(pollo);
    }
}

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}

function dibujarAnimales(animal) {
    var maximo;
    var cantidad = valorAleatorio(0, animal.cantidadMaxima);
    for (let i = 0; i < cantidad; i++) {
        maximo = jv.width - animal.imagen.width;
        posicionX = valorAleatorio(0, maximo);
        maximo = jv.height - animal.imagen.height;
        posicionY = valorAleatorio(0, maximo);
        papel.drawImage(animal.imagen, posicionX, posicionY);
    }
}