var minimo = 0;
var maximo = 3;
var aleatorio;

for (i = 0; i < 10; i++) {
    valorAleatorio(minimo, maximo);
    console.log(aleatorio);
}


function valorAleatorio(minimo, maximo) {
    aleatorio = Math.floor((maximo - minimo + 1) * Math.random() + minimo);
}