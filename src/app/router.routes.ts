
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './components/principal.component';
import { ProductoListComponent } from './components/productos/producto-list/producto-list.component';
import { PersonaListComponent } from './components/personas/persona-list/persona-list.component';
import { VentaComponent } from './components/venta/venta.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonaAddComponent } from './components/personas/persona-add/persona-add.component';
import { ProductoAddComponent } from './components/productos/producto-add/producto-add.component';

const APP_ROUTES: Routes = [
    { path: '',
      component: PrincipalComponent,
      children: [

          { path: 'dashboard', component: DashboardComponent },
          { path: 'producto-lista', component: ProductoListComponent },
          { path: 'producto-add', component: ProductoAddComponent },
          { path: 'persona-lista', component: PersonaListComponent },
          { path: 'persona-add', component: PersonaAddComponent },
          { path: 'venta', component: VentaComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    },
    { path: 'login', component: UserLoginComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
