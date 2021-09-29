import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    console.log(this.user)
  }

}
