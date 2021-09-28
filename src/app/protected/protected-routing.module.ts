import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaTokenGuard } from 'src/app/valida-token.guard';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent, canActivate: [ValidaTokenGuard],
    children:[
      {path: 'admin', component: MenuComponent},
    ]
    // path: '',
    // component: MenuComponent,
    // canActivate: [ ValidarTokenGuard ],
    // canLoad: [ ValidarTokenGuard ],
    // children: [
    //   {path: 'admin', component: DashboardComponent},
    //   {path: 'acoes', component: AcoesComponent},
    //   {path: 'historico', component: HistoricoComponent},
    //   {path: 'usuario', component: UsuarioComponent},
    //   {path: '**', redirectTo: 'admin'}
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
