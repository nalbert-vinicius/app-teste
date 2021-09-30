import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: any;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    await this.usuarioService.getUsuarios().then((data: any) =>{
      this.user = data.users;
    })
  }

  deletar(userId){
    this.usuarioService.deletarUser(userId).then((data: any) =>{
      Swal.fire('Sucess', data.message, 'success');
      this.ngOnInit()
    }).catch(error =>{
      Swal.fire('Error', error.error.message, 'error');
    })
  }
}
