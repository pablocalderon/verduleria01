import { Component } from '@angular/core';
import { CarroService } from '../services/carro.service';

interface Verdura {
  nombre: string;
  descripcion: string;
  costo: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent {
  verduras: Verdura[] = [
    { nombre: 'Zanahoria', descripcion: 'Excelente para la vista.', costo: 2.50, imagenUrl: 'assets/img/zanahoria-300-300.webp' },
    { nombre: 'Lechuga', descripcion: 'Fresca y crujiente.', costo: 1.20, imagenUrl: 'assets/img/lechuga-300-300.webp' },
    { nombre: 'Tomate', descripcion: 'Ideal para ensaladas.', costo: 3.00, imagenUrl: 'assets/img/tomate-300-300.webp' },
  ];

  // Puedes añadir lógica de ordenación aquí
  ordenarPorNombre() {
    this.verduras.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  ordenarPorCosto() {
    this.verduras.sort((a, b) => a.costo - b.costo);
  }
  constructor(private carroService: CarroService){}
  ngOnInit(): void {}
  agregarAlCarro(verdura: any){
    this.carroService.agregarProducto(verdura);
    alert(`${verdura.nombre} ha sido agregada al carrito.`);

  }
}
