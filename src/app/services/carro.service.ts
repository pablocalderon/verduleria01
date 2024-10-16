import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
 private items:any[]=[];
  constructor() { }
  agregarProducto(producto: any) {
    this.items.push(producto);
  }

  // Método para obtener los productos en el carrito
  obtenerProductos() {
    return this.items;
  }

  // Método para limpiar el carrito
  limpiarCarrito() {
    this.items = [];
  }

}
