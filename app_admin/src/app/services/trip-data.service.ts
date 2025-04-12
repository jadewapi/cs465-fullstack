import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // GET trips
  getTrips(): Observable<Trip[]> {
    const url = `${this.apiBaseUrl}/trips`;
    return this.http.get<Trip[]>(url);
  }

  // POST trip
  addTrip(trip: Trip): Observable<Trip> {
    const url = `${this.apiBaseUrl}/trips`;
    return this.http.post<Trip>(url, trip);
  }
}
