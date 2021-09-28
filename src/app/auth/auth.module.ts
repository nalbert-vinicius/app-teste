import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Pages
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MainComponent } from './main/main.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ]
})
export class AuthModule { }
