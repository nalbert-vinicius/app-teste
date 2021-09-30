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

    Swal.fire({
      title: 'Tem certeza que deseja remover?',
      text: "Todos os números relacionados serão removidos!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover!'
    }).then((result) => {
      if (result.isConfirmed) {

        
      this.usuarioService.deletarUser(userId).then((data: any) =>{
        Swal.fire('Deleted!',data.message, 'success'
        )
        Swal.fire('Sucess', data.message, 'success');
        this.ngOnInit()
      }).catch(error =>{
        Swal.fire('Error', error.error.message, 'error');
      })
      }
    })


  }
}
