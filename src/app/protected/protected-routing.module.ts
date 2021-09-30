import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaTokenGuard } from 'src/app/valida-token.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteeditarComponent } from './clienteeditar/clienteeditar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', 
    component: MenuComponent,
    canActivate: [ValidaTokenGuard],
    children:[
      {path: 'admin', component: DashboardComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'editar/:id', component: ClienteeditarComponent},
      {path: 'novo', component: ClienteeditarComponent},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
