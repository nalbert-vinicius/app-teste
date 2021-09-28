import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/service/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidaTokenGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router   
  ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validarToken().pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
  
}
