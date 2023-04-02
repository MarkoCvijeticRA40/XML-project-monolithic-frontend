import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiHost + 'api/ticket', {headers: this.headers});
  }
  
  createTicket(ticket: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/ticket', ticket, {headers: this.headers});
  }
  
  getTicket(id: string): Observable<Ticket> {
    return this.http.get<Ticket>(this.apiHost + 'api/ticket/' + id, {headers: this.headers});
  }

  getTicketsByUser(userId: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiHost + 'api/ticket/user/' + userId, {headers: this.headers});
  }

}
