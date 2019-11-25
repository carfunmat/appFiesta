import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    UbicacionComponent,
    NavbarComponent,
    FormularioComponent,
    ConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
