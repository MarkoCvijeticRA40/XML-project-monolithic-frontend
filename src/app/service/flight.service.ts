import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Flight} from "../model/flight.model";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + 'api/flight', {headers: this.headers});
  }
  
  createFlight(flight: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/flight', flight, {headers: this.headers});
  }
  
  getFlight(id: string): Observable<Flight> {
    return this.http.get<Flight>(this.apiHost + 'api/flight/' + id, {headers: this.headers});
  }
  
  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/flight/' + id, {headers: this.headers});
  }

  updateFlight(flight: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/flight/' + flight.id, flight, {headers: this.headers});
  }

  getAllFlightBySearch(searchDate: Date, searchDeparture: string, searchDestination: string, searchPassinger: number): Observable<any> {
    return this.http.get<Flight[]>(this.apiHost + 'api/flight/' + searchDate + '/' + searchDeparture + '/' 
    + searchDestination + '/' + searchPassinger , {headers: this.headers});
    }

  
}


