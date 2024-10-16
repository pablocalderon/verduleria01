import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {
  contactoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      rut: ['', [Validators.required, Validators.pattern(/^[0-9]+-[0-9kK]{1}$/)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      sexo: ['', Validators.required],
      comentario: ['', [Validators.required, Validators.minLength(10)]],
    });
  }  
  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      alert('Formulario enviado exitosamente!');
      this.contactoForm.reset();
    } else {
      console.log('Formulario inválido');
    }
  }
}

