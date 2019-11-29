<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
=======
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';



import {IndexComponent} from './index/index.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';

>>>>>>> fd2b2648bcf222469812ea1abe84767dd548fe16

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UbicacionComponent,
    NavbarComponent,
    GaleriaComponent,
    IndexComponent,
    FormularioComponent,
    ConfirmacionComponent
=======
    IndexComponent,
    PresentacionComponent,
    MenuComponent
>>>>>>> fd2b2648bcf222469812ea1abe84767dd548fe16
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'presentacion', component: PresentacionComponent},
      {path: '', component: IndexComponent, pathMatch: 'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
