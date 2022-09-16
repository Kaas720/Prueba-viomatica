import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasCrearCuentaComponent } from './mascotas-crear-cuenta/mascotas-crear-cuenta.component';
import { MascotassComponent } from './mascotass/mascotass.component';
import { ComponenteInicioComponent } from './Producto/componente-inicio/componente-inicio.component';

const routes: Routes = [
  {path:'',component:MascotassComponent},
  {path:'Producto',component:ComponenteInicioComponent},
  {path:'NuevaMascotas',component:MascotasCrearCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
