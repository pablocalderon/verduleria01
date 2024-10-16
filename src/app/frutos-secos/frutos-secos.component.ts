//import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FrutosSecosService, FrutoSeco } from '../services/frutos-secos.service';

@Component({
  selector: 'app-frutos-secos',
  templateUrl: './frutos-secos.component.html',
  styleUrls: ['./frutos-secos.component.css']
})
export class FrutosSecosComponent implements OnInit {
  frutosSecos: FrutoSeco[] = [];

  constructor(
    private frutosSecosService: FrutosSecosService,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.frutosSecosService.obtenerFrutosSecos().subscribe((data) => {
      this.frutosSecos = data;
    });
  }

  ordenarPorNombre() {
    this.frutosSecos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    this.cdr.detectChanges();
  }

  ordenarPorCosto() {
    this.frutosSecos.sort((a, b) => a.costo - b.costo);
    this.cdr.detectChanges();
  }
  
}

