export default class Inventario{
    constructor() {
        this.productos = new Array();
    }
    agregar(producto) {
        this.productos.push(producto);
    }
    buscar(codigo) {
        let producto = false;
        let inicio = 0;
        let fin = this.productos.length - 1;
        let mitad = Math.floor((inicio + fin) / 2);
        while (inicio <= fin) {
            if (Number(this.productos[mitad].codigo) === Number(codigo)) {
                producto = this.productos[mitad];
                break;
            } else if (Number(this.productos[mitad].codigo) < Number(codigo)) {
                inicio = mitad + 1;
            } else
                fin = mitad - 1;
            mitad = Math.floor((inicio + fin) / 2);
        }
        return producto;
    }
    eliminar(codigo) {
        let product = false;
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    for (let o = i; o < this.productos.length - 1; o++)
                        this.productos[o] = this.productos[o + 1];

                    this.productos[this.productos.length - 1] = 0;
                    this.productos.pop();
                    product = true;
                }
        }
        return product;
    }
    listado() {
        let str = '<tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td><td>Total</td></tr >';
        if (this.productos.length != 0){
            for (let i = 0; i <= this.productos.length - 1; i++)
                str += `<tr><td>${this.productos[i].codigo} </td> <td>${this.productos[i].nombre} </td><td> ${this.productos[i].cantidad} </td><td>${this.productos[i].costo}</td><td>${this.productos[i].total}</td></tr>`;
            return str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
    listadoInverso() {
        let str = '<tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td><td>Total</td></tr >';
        let aux = 0;
        for (let k = 0; k < this.productos.length / 2; k++){
            aux = this.productos[k];
            this.productos[k] = this.productos[this.productos.length - 1 - k];
            this.productos[this.productos.length - 1 - k] = aux;
        }
        if (this.productos.length != 0) {
            for (let i = 0; i <= this.productos.length-1; i++){
                str += `<tr><td>${this.productos[i].codigo} </td> <td>${this.productos[i].nombre} </td><td> ${this.productos[i].cantidad} </td><td>${this.productos[i].costo}</td><td>${this.productos[i].total}</td></tr>`;
            }
            return str;
        } else {
            console.log("No hay productos en el inventario");
            return str = "";
        }
    }
    ordenarCodigo() {
        if (this.productos.length != 0) {
            let i, j, aux;
            for (i = 0; i < this.productos.length - 1; i++)
                for (j = 0; j < this.productos.length - i - 1; j++)
                    if (parseInt(this.productos[j + 1].codigo) < parseInt(this.productos[j].codigo)) {
                        aux = this.productos[j + 1];
                        this.productos[j + 1] = this.productos[j];
                        this.productos[j] = aux;
                    }
            
        } else {
            console.log("No hay elementos en el inventario");
            return null;
        }
    }
    
}