import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { httpService } from './httpService';


@Injectable({
  providedIn: 'root'
})
export class TelefoneService extends httpService{

  constructor(
    private http: HttpClient
  ) { super() }

  salvarTelefone(userId, data){
    return this.http.post(`${environment.baseUrl}api/tell/insert`, {idcliente: userId, data}, this.httpOptions).toPromise().then((data:any) =>{ return data });
  }

  getTelefones(userId){
    return this.http.get(`${environment.baseUrl}api/tell/${userId}`, this.httpOptions).toPromise().then((data:any) =>{ return data });
  }

  deletarTelefone(tellId){
    return this.http.delete(`${environment.baseUrl}api/tell/delete/${tellId}`, this.httpOptions).toPromise().then((data:any) =>  {return data});
  }
  
}



