import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:4000/users';
  checkUserDetailsUrl = `${this.apiUrl}/checkUserDetails`;

  constructor(private http: HttpClient) { }

  checkDetails(): Observable<string> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any>(this.checkUserDetailsUrl, { headers }).pipe(map(data => data.info.role));
  }

  registerUser(userDetails: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/register`, userDetails, { headers });
  }

  loginUser(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/login`, credentials, { headers });
  }

  getAllUsers(): Observable<any[]> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any[]>(`${this.apiUrl}/`, { headers });
  }

  getUserById(userId: string): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

    return this.http.get<any>(`${this.apiUrl}/details/${userId}/`, { headers });
  }
}
