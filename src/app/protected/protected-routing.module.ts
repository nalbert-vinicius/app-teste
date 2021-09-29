import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidaTokenGuard } from 'src/app/valida-token.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', 
    component: MenuComponent,
    canActivate: [ValidaTokenGuard],
    children:[
      {path: 'admin', component: DashboardComponent},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
