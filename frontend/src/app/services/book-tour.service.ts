import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookTourService {

  private baseUrl = 'http://localhost:4500/tours';

 constructor(private http: HttpClient) {}


bookTour(tourID: string): Observable<any> {
  const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': token
    });

  const body = { tourID };

  return this.http.post('http://localhost:4500/tours/book', body, { headers });
}


  getBookedTours(userID:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/bookedTours/${userID}`)

  }
}