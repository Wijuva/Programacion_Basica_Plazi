var jv = document.getElementById("villaLienzo");
var papel = jv.getContext("2d");

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
    cantidadMaxima: 1,
    posicionX: 0,
    posicionY: 0,
    movimiento: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    cantidadMaxima: 1,
    posicionX: 0,
    posicionY: 0,
    movimiento: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

var pollo = {
    url: "pollo.png",
    cargaOk: false,
    cantidadMaxima: 1,
    posicionX: 0,
    posicionY: 0,
    movimiento: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

document.addEventListener("keydown", moverCerdo);

function valorAleatorio(minimo, maximo) {
    var aleatorio = Math.floor((maximo - minimo + 1) * Math.random() + minimo);
    return aleatorio;
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        vaca = dibujarAnimales(vaca)
    }
    if (cerdo.cargaOk) {
        cerdo = dibujarAnimales(cerdo);
    }
    if (pollo.cargaOk) {
        pollo = dibujarAnimales(pollo);
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
    if (animal.movimiento == false) {
        var maximo;
        maximo = jv.width - animal.imagen.width;
        animal.posicionX = valorAleatorio(0, maximo);

        maximo = jv.height - animal.imagen.height;
        animal.posicionY = valorAleatorio(0, maximo);

        papel.drawImage(animal.imagen, animal.posicionX, animal.posicionY);
        return animal;
    } else if (animal.movimiento == true) {
        papel.drawImage(animal.imagen, animal.posicionX, animal.posicionY);
        return animal;
    }
}

function moverCerdo(keyOprimida) {
    vaca.movimiento = true;
    cerdo.movimiento = true;
    pollo.movimiento = true;
    switch (keyOprimida.keyCode) {
        case teclas.LEFT:
            cerdo.posicionX = cerdo.posicionX - 10;
            break;
        case teclas.UP:
            cerdo.posicionY = cerdo.posicionY - 10;
            break;
        case teclas.RIGHT:
            cerdo.posicionX = cerdo.posicionX + 10;
            break;
        case teclas.DOWN:
            cerdo.posicionY = cerdo.posicionY + 10;
            break;

        default:
            break;
    }
    dibujar();
}