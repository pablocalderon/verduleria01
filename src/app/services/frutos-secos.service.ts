import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FrutoSeco {
  nombre: string;
  descripcion: string;
  costo: number;
  imagenUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FrutosSecosService {
  private frutosSecos: FrutoSeco[] = [
    {
      nombre: 'Almendras',
      descripcion: 'Ricas en vitamina E y antioxidantes.',
      costo: 10.00,
      imagenUrl: 'assets/img/almendras-300-300.webp'
    },
    {
      nombre: 'Nueces',
      descripcion: 'Excelente fuente de omega-3.',
      costo: 12.50,
      imagenUrl: 'assets/img/nueces-300-300.webp'
    },
    {
      nombre: 'Pistachos',
      descripcion: 'Alto contenido en proteínas y fibra.',
      costo: 15.00,
      imagenUrl: 'assets/img/pistachos-300-300.webp'
    },
  ];
  obtenerFrutosSecos(): Observable<FrutoSeco[]> {
    return of(this.frutosSecos);
  }
  

}
