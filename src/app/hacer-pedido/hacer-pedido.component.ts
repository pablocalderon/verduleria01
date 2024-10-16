import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.css']
})
export class HacerPedidoComponent implements OnInit {
  pedidoForm!: FormGroup;
  productosDisponibles: string[] = ['Frutas', 'Verduras', 'Frutos Secos']; 



  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      productos: ['', Validators.required],  // Campo para los productos seleccionados
      comentario: [''],
    });
  }

  enviarPedido() {
    if (this.pedidoForm.valid) {
      console.log('Pedido enviado:', this.pedidoForm.value);
      alert('Pedido enviado exitosamente!');
      this.pedidoForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}
