import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nickname: ['',[Validators.required]],
    senha: ['',[Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private routeParam: ActivatedRoute,
    private AuthService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  login(){
    const {nickname, senha} = this.form.value;
    this.AuthService.login(nickname, senha).subscribe( ok =>{
      if(ok.sucess == true){
        this.route.navigateByUrl('/dashboard');
      }else{
        //
      }
    })
  }

}
