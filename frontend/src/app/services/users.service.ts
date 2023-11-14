import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl='http://localhost:4500/users/checkUserDetails'

  constructor(private http: HttpClient) { }



  checkDetails(): Observable<string> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any>(this.apiUrl, { headers }).pipe(map(data => data.info.role));
  }

}
  

