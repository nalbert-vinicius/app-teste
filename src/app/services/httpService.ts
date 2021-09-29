import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class httpService {

  constructor( ) {
   }

  get httpOptions() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${this.userToken}`);
    return {
      headers
    };
  }

  get userToken() {
    if (localStorage.getItem('loggedInUser')) {
      return (JSON.parse(localStorage.getItem('loggedInUser'))).token;
    } else {
      return '';
    }
  }
}