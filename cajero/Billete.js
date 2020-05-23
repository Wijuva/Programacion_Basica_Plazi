class Billete {
    constructor(nombre, valor, cantidad) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.valor = valor;
        this.cantidad = cantidad;

        this.imagen.src = this.nombre + ".png";
    }
    mostrar() {
        fotos.appendChild(this.imagen);
    }
}