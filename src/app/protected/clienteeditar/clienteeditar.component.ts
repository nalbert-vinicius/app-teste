import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TelefoneService } from 'src/app/services/telefone.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clienteeditar',
  templateUrl: './clienteeditar.component.html',
  styleUrls: ['./clienteeditar.component.css']
})
export class ClienteeditarComponent implements OnInit {

  user: any;
  userId: any;
  tell: any = [];
  val: any = [];

  form: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    nickname: ['',[Validators.required]],
    senha: ['',[Validators.required]],
    cpf: ['',[Validators.required]],
    data_nasc: ['',[Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    public usuariosService: UsuarioService,
    public tellService: TelefoneService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((id:any) =>{
      this.userId = id.id;
      if(this.userId!=undefined){
        this.usuariosService.getUserById(id.id).then((data) =>{
        this.form.controls['nome'].setValue(data.nome)
        this.form.controls['nickname'].setValue(data.nickname)
        this.form.controls['senha'].setValue(data.senha)
        this.form.controls['cpf'].setValue(data.cpf)
        this.form.controls['data_nasc'].setValue(data.data_nasc)
      })
      }
    })
  }

  salvar(){
    if(this.userId == undefined){
      var user = {
        nome: this.form.value.nome,
        nickname: this.form.value.nickname,
        senha: this.form.value.senha,
        cpf: this.form.value.cpf,
        data_nasc: this.form.value.data_nasc
      }
      this.usuariosService.cadastroUsuario(user).then((data: any) =>{
        Swal.fire('Sucess', data.message, 'success');
        this.route.navigateByUrl('/dashboard/cadastro');
      }).catch(error =>{
        Swal.fire('Error', error.error.message, 'error');
      })
    }else{
      if(this.tell != []){
        this.val.forEach(element => {
          this.tellService.salvarTelefone(element).then((data: any) => {
             console.log(data)
          })
        });
      }

      this.usuariosService.updateUser(this.userId, this.form.value).then((data: any) =>{      
        Swal.fire('Sucess', data.message, 'success');
        this.route.navigateByUrl('/dashboard/cadastro');
      }).catch(error =>{
        console.log(error)
        Swal.fire('Error', error.error.message, 'error');
      })
    }
  }

  inserirTell(){
    this.tell.push('');
  }

  keyup(data){
    if(data.length == 15){
      this.val.push(data)
    }
  }

}
