import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    nickname: ['',[Validators.required]],
    senha: ['',[Validators.required]],
    cpf: ['',[Validators.required]],
    data_nasc: ['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public usuariosService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  cadastro(){
    var user = {
      nome: this.form.value.nome,
      nickname: this.form.value.nickname,
      senha: this.form.value.senha,
      cpf: this.form.value.cpf,
      data_nasc: this.form.value.data_nasc
    }
    this.usuariosService.cadastroUsuario(user).then((data: any) =>{
      Swal.fire('Sucess', data.message, 'success');
      this.route.navigateByUrl('/auth/login');
    }).catch(error =>{
      Swal.fire('Error', error.error.message, 'error');
    })
  }

}
