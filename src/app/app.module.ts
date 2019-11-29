import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    UbicacionComponent,
    NavbarComponent,
    GaleriaComponent,
    IndexComponent,
    FormularioComponent,
    ConfirmacionComponent,
    PresentacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    RouterModule.forRoot([
      {path: 'presentacion', component: PresentacionComponent},
      {path: '', component: IndexComponent, pathMatch: 'full'}

    ]),

    //GoogleMapsModule,
    AngularFireModule.initializeApp(environment, 'appFiesta'),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
