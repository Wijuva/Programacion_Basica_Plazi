var jv = document.getElementById("villaLienzo");
var papel = jv.getContext("2d");
//var mapa = "tile.png";

var fondo = {
    url: "tile.png",
    cargaOk: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOk: false
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

var pollo = {
    url: "pollo.png",
    cargaOk: false
};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

/*var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", cargarFondo);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", cargarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);*/


/*var minimo = 0;
var maximo = 3;
var aleatorio;

for (i = 0; i < 10; i++) {
    valorAleatorio(minimo, maximo);
    console.log(aleatorio);
}*/


function valorAleatorio(minimo, maximo) {
    aleatorio = Math.floor((maximo - minimo + 1) * Math.random() + minimo);
}

function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0)
    }
    if (vaca.cargaOk) {
        papel.drawImage(vaca.imagen, 100, 100)
    }
    if (cerdo.cargaOk) {
        papel.drawImage(cerdo.imagen, 0, 0)
    }
    if (pollo.cargaOk) {
        papel.drawImage(pollo.imagen, 0, 350)
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

/*function dibujarVacas() {
    papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos() {
    papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos() {
    papel.drawImage(pollo, 300, 150);
}*/