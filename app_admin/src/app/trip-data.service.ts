import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips'; // this should match your Express API

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
