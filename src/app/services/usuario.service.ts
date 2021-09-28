import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
//import { httpService } from '../services/httpService';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  cadastroUsuario(data){
    return this.http.post(`${environment.baseUrl}api/user/insert`, data).toPromise().then((data:any) =>{ return data });
  }
}
