export class ProductosModel {
    idproducto: number;
    nombre: string;
    precio: number;
    stock: number;
    descripcion: string;
    constructor() {
        this.idproducto = 0;
        this.nombre = '';
        this.precio = 0;
        this.stock = 0;
        this.descripcion = '';
    }
}