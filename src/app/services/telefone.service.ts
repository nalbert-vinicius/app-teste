import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { httpService } from './httpService';


@Injectable({
  providedIn: 'root'
})
export class TelefoneService extends httpService{

  constructor(
    private http: HttpClient
  ) { super() }

  async salvarTelefone(data){
    return await this.http.post(`${environment.baseUrl}api/tell/insert`, {data}, this.httpOptions).toPromise().then((data:any) =>{ return data });
  }

  deletarTelefone(userId){
    return this.http.delete(`${environment.baseUrl}api/tell/delete/${userId}`, this.httpOptions).toPromise().then((data:any) =>  {return data});
  }
}
