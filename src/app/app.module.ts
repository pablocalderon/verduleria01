import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { FrutosSecosComponent } from './frutos-secos/frutos-secos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    VerdurasComponent,
    FrutosSecosComponent,
    ContactoComponent,
    HacerPedidoComponent,
    CarroCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
