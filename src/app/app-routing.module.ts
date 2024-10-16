import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrutasComponent } from './frutas/frutas.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { FrutosSecosComponent } from './frutos-secos/frutos-secos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component'; 


//const routes: Routes = [];
const routes: Routes = [
  { path: 'frutas', component: FrutasComponent },
  { path: 'verduras', component: VerdurasComponent },
  { path: 'frutos-secos', component: FrutosSecosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'carro-compra', component: CarroCompraComponent },
  { path: '', redirectTo: '/frutas', pathMatch: 'full' },  
  { path: '**', redirectTo: '/frutas' }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
