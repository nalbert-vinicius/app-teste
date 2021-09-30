import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteeditarComponent } from './clienteeditar/clienteeditar.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    MenuComponent,
    DashboardComponent,
    CadastroComponent,
    ClienteeditarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProtectedRoutingModule,
    NgxMaskModule.forChild()
  ]
})
export class ProtectedModule { }
