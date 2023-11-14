import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User,LoginResponse, userLogin } from '../interfaces/user';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient,) { }
  private apiUrl = 'http://localhost:4500/users';

  registerUser(user:User){
    this.http.post(`${this.apiUrl}/register/`,user).subscribe(res=>{
      return res
    })
  }


  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login/`, user).pipe(
      tap((result) => {
        
        const token = result.token;

       
        localStorage.setItem('token', token);
      })
    );
  }

  // async login(userLogins: User){
  //   let response = await fetch('http://localhost:5200/users/login', {
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     method: "POST",
  //     body: JSON.stringify(userLogins)
  //   })

  //   const data = await response.json()
  //   let token = data.token
  //   localStorage.setItem('token', token)
    

  //   console.log(token);
    
    

  //   return data
  // }


  getUserDetails(userID: string): Observable<any> {
  
    const token = localStorage.getItem('token');

    
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;

    
    return this.http.get(`${this.apiUrl}/details/${userID}`, { headers });
  }

  isLoggedIn(): boolean {
    // Check if there is a token in local storage
    return !!localStorage.getItem('token');
  }
  
  // getUserDetails(): Observable<UserDetails> {
  //   // Get the token from local storage
  //   const token = localStorage.getItem('token');
  
  //   // If token is present, include it in the Authorization header
  //   const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
  
  //   // Make the request with the Authorization header
  //   return this.http.get<UserDetails>(`${this.apiUrl}/details`, { headers });
  // }
  
  
  // loginUser(user:User){
  //   this.http.post('http://localhost:4500/users/login/',user).subscribe(result=>{
  //     console.log(result)
  //     return result
  //   })
  // }
}


