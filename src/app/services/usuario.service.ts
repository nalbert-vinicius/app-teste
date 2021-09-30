import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { httpService } from '../services/httpService';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends httpService{

  constructor(
    private http: HttpClient
  ) { super() }

  cadastroUsuario(data){
    return this.http.post(`${environment.baseUrl}api/user/insert`, data).toPromise().then((data:any) =>{ return data });
  }

  getUsuarios(){
    return this.http.get(`${environment.baseUrl}api/user`, this.httpOptions).toPromise().then((data)=> {return data})
  }

  getUserById(data){
    return this.http.get(`${environment.baseUrl}api/user/biid/${data}`, this.httpOptions).toPromise().then((data:any) =>  {return data.users[0]});
  }

  updateUser(userId, data){
    return this.http.patch(`${environment.baseUrl}api/user/update/${userId}`, data, this.httpOptions).toPromise().then((data:any) =>  {return data});
  }

  deletarUser(userId){
    return this.http.delete(`${environment.baseUrl}api/user/delete/${userId}`, this.httpOptions).toPromise().then((data:any) =>  {return data});
  }
}
