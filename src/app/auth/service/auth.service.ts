import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { UserState } from '../../state/userState';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private baseUrl: string = environment.baseUrl;
    private _usuario!: any;

    constructor(
        private http: HttpClient,
        private userState: UserState
    ){ }

    get usuario() {
        return { ...this._usuario};
    }

    login(nickname: String, senha: String){
        const url = `${this.baseUrl}api/user/login`;
        const data = {nickname, senha}
        return this.http.post<any>(url, data).pipe(
            tap(result =>{
                if(result){
                    this.userState.setActiveUser(result);
                    localStorage.setItem('token', result.token!);
                }
            }),map(result => result),
            catchError( err => of(err.error.message))
        )
    }

    validarToken(): Observable<boolean> {
        const url = `${ this.baseUrl }api/user/validate`;
        const headers = new HttpHeaders().set('authorization', 'Bearer '+ this.userState.getToken()  || '' );
    
        return this.http.post<any>( url, null, { headers } )
            .pipe(
              map( resp => {
                 this._usuario = {
                   message: resp.message,
                   nome: resp.nome,
                   sucess: resp.sucess,
                 }
                return resp.sucess;
              }),
              catchError( err => of(false) )
            );
      }

    async logout(){
        await localStorage.removeItem('loggedInUser');
        await localStorage.removeItem('token')
    }

}