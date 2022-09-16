import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteInicioComponent } from './Producto/componente-inicio/componente-inicio.component';
import { FormsModule } from '@angular/forms';
import { MascotassComponent } from './mascotass/mascotass.component';
import { MascotasCrearCuentaComponent } from './mascotas-crear-cuenta/mascotas-crear-cuenta.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ComponenteInicioComponent,
    MascotassComponent,
    MascotasCrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
