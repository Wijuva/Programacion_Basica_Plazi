class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var dinero_entregado = [];
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (const bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            dinero_entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    
    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero que no puede darte esa cantidad de dinero";
    } else {
        resultado.innerHTML = "";
        for (const e of dinero_entregado ) {
            if (e.cantidad != 0) {
                resultado.innerHTML += (e.cantidad + " billetes de $" + e.valor + "<br />");
            }
        }
    }
}