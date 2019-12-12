import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
//import { NavbarComponent } from './navbar/navbar.component';
//import { GaleriaComponent } from './galeria/galeria.component';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
/*     UbicacionComponent,
    NavbarComponent,
    GaleriaComponent, */
    IndexComponent,
    FormularioComponent,
    ConfirmacionComponent,
    PresentacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([

      // <!-- Ruta a presentacion -->
      {path: 'presentacion/:id', component: PresentacionComponent},

      // <!-- Ruta al inicio -->
      {path: '', component: IndexComponent, pathMatch: 'full'},

      // <!-- Ruta al formulario compra -->
      {path: 'presentacion/:id/formulario', component: FormularioComponent},
      {path: 'presentacion/:id/formulario', component: FormularioComponent},
      {path: 'presentacion/:id/formulario', component: FormularioComponent},
      {path: 'presentacion/:id/formulario', component: FormularioComponent}

      /* <!-- Ruta a los djs -->
      {path: 'presentacion/RBF/Djs', component: DjsComponent},
      {path: 'presentacion/KP/Djs', component: DjsComponent},
      {path: 'presentacion/techno/Djs', component: DjsComponent},
      {path: 'presentacion/LIR/Djs', component: DjsComponent}, */

      /* <!-- Ruta a la galeria -->
      {path: 'presentacion/RBF/Djs', component: DjsComponent},
      {path: 'presentacion/KP/Djs', component: DjsComponent},
      {path: 'presentacion/techno/Djs', component: DjsComponent},
      {path: 'presentacion/LIR/Djs', component: DjsComponent}, */

    ]),

    // GoogleMapsModule,


  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
