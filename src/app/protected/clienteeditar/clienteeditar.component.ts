import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ClienteeditarComponent implements OnInit, OnDestroy  {

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
    var data = this.activatedRoute.params.subscribe((id:any) =>{
      this.userId = id.id;
      if(this.userId!=undefined){
        this.usuariosService.getUserById(this.userId).then((data) =>{
        this.form.controls['nome'].setValue(data.nome)
        this.form.controls['nickname'].setValue(data.nickname)
        this.form.controls['senha'].setValue(data.senha)
        this.form.controls['cpf'].setValue(data.cpf)
        this.form.controls['data_nasc'].setValue(data.data_nasc)
      })
      }
    })
    this.tellService.getTelefones(this.userId).then((data: any) =>{
      debugger
      this.tell = data.tell
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
        this.ngOnInit()
        Swal.fire('Sucess', data.message, 'success');
        this.route.navigateByUrl('/dashboard/cadastro');
      }).catch(error =>{
        Swal.fire('Error', error.error.message, 'error');
      })
    }else{
      if(this.tell != []){
        this.tell.forEach(element => {
          this.tellService.salvarTelefone(this.userId, element).then((data: any) => {
              if(data.sucess = true){
                this.updateUser();
              }
          }).catch(error =>{
               Swal.fire('Error', error.error.message, 'error');
            })
        });
      }
      this.updateUser();
    }
  }

  inserirTell(){
    this.tell.push({telefone: ''});
  }

  keyup(i, telefone){

    this.tell.forEach(element => {
      if(telefone == element.telefone){
        this.tell.splice(i, 1)
        Swal.fire('Sucess', 'telefone ja cadastrado', 'error');
        this.ngOnInit();
      }
    });

    if(telefone.length == 15){
      this.tell.pop();
      this.tell.push({telefone})
    }
  }

  deletar(data){
    this.tellService.deletarTelefone(data).then((data:any) =>{
      Swal.fire('Sucess', data.message, 'success');
      this.ngOnInit();
    }).catch(error =>{
      Swal.fire('Sucess', 'removido', 'success');
      this.ngOnInit();
    })
  }

  updateUser(){
    this.usuariosService.updateUser(this.userId, this.form.value).then((data: any) =>{    
      this.userId = 0
      Swal.fire('Sucess', data.message, 'success');
      this.route.navigateByUrl('/dashboard/cadastro');
    }).catch(error =>{
      Swal.fire('Error', error.error.message, 'error');
    })
  }

  ngOnDestroy() {
    console.log('foo destroy')
  }

}
