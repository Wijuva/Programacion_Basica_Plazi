var fotos = document.createElement("picture");
var resultado = document.createElement("p");
document.body.appendChild(fotos);
document.body.appendChild(resultado);

var dinero = 0;
var div = 0;


var caja = [];
caja.push(new Billete("Billete_50", 50, 20));
caja.push(new Billete("Billete_20", 20, 5));
caja.push(new Billete("Billete_10", 10, 10));
caja.push(new Billete("Billete_5", 5, 5));
caja.push(new Billete("Billete_2", 2, 20));
caja.push(new Billete("Billete_1", 1, 50));

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero() {
    var dinero_entregado = [];
    var papeles = 0;

    // Eliminar resultados y billetes anteriores
    document.body.removeChild(fotos);
    document.body.removeChild(resultado);
    // Inicializar nuevamente los Elementos
    fotos = document.createElement("picture");
    resultado = document.createElement("p");

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
            dinero_entregado.push(new Billete(bi.nombre, bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = "Soy un cajero que no puede darte esa cantidad de dinero";
    } else {
        var contador = 0;
        for (const billete of dinero_entregado) {
            if (billete.cantidad != 0) {
                fotos.innerHTML += "<br />Billetes de $" + billete.valor + "<br />";
                for (let i = 0; i < billete.cantidad; i++) {
                    billete.mostrar();
                    fotos.innerHTML += " ";
                }
                caja[contador].cantidad -= billete.cantidad;
            }
            contador += 1;
        }
    }
    // Agregar nuevamente los resultados
    document.body.appendChild(fotos);
    document.body.appendChild(resultado);
}
