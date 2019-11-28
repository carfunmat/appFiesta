import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';



import {IndexComponent} from './index/index.component';
import {PresentacionComponent} from './presentacion/presentacion.component';

import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PresentacionComponent,
    MenuComponent
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
