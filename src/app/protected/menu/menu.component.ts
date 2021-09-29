import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private AuthService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  get usuario(){
    return this.AuthService.usuario;
  }

  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }

}
