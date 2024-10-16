import { Component, OnInit } from '@angular/core';
import { CarroService } from '../services/carro.service';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {
  productos: any[] = [];
  total: number = 0;  // Variable para almacenar el costo total

  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.productos = this.carroService.obtenerProductos();
    this.calcularTotal();  // Calcular el total al cargar el carrito
  }

  // Método para calcular el costo total de los productos en el carrito
  calcularTotal() {
    this.total = this.productos.reduce((acc, producto) => acc + producto.costo, 0);
  }

  limpiarCarrito() {
    this.carroService.limpiarCarrito();
    this.productos = [];
    this.total = 0;  // Reiniciar el total al vaciar el carrito
    alert('El carrito ha sido vaciado.');
  }
}
