import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
//  RPUTES
import { APP_ROUTING } from './router.routes';


import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { PersonaListComponent } from './components/personas/persona-list/persona-list.component';
import { PersonaAddComponent } from './components/personas/persona-add/persona-add.component';
import { ProductoListComponent } from './components/productos/producto-list/producto-list.component';
import { ProductoAddComponent } from './components/productos/producto-add/producto-add.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { GraficosComponent } from './elementos/graficos/graficos.component';
import { PrincipalComponent } from './components/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    PersonaListComponent,
    PersonaAddComponent,
    ProductoListComponent,
    ProductoAddComponent,
    DashboardComponent,
    UserLoginComponent,
    GraficosComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
