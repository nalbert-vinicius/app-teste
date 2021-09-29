import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-clienteeditar',
  templateUrl: './clienteeditar.component.html',
  styleUrls: ['./clienteeditar.component.css']
})
export class ClienteeditarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public usuariosService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  form: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    nickname: ['',[Validators.required]],
    senha: ['',[Validators.required]],
    cpf: ['',[Validators.required]],
    data_nasc: ['',[Validators.required]],
  })

  salvar(){

  }

}
