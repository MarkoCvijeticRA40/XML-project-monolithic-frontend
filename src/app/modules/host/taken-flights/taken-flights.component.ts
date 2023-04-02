import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/model/flight.model';
import { Ticket } from 'src/app/model/ticket';
import { FlightService } from 'src/app/service/flight.service';
import { TicketService } from 'src/app/service/ticket.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-taken-flights',
  templateUrl: './taken-flights.component.html',
  styleUrls: ['./taken-flights.component.css']
})
export class TakenFlightsComponent implements OnInit {

  public id: any;
  public flightId: any;
  public tickets: Ticket[] = [];
  public ticketsPomocni: Ticket[] = [];

  public flights: Flight[] = [];
  public flight: Flight = new Flight();
  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['picture', 'departure' , 'destination' , 'price' , 'departureDate'];


  constructor(private userService: UserService, private flightService: FlightService, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.id = this.userService.getCurrentUserId();

    this.loadTickets2();
  }

  public loadTickets2(){
    this.ticketService.getTickets().subscribe(res => {
      let result = Object.values(JSON.parse(JSON.stringify(res)));
      result.forEach((element: any) => {
        var app = new Ticket(element);
        if(app.userId == this.id){
          this.tickets.push(app);
        }
      });
    
      console.log(this.tickets);
    
      
      const flightRequests = this.tickets.map((element: any) => {
        return this.flightService.getFlight(element.flightId).toPromise().then(res => {
          const flight = new Flight(res);
          this.flights.push(flight);
        });
      });
      Promise.all(flightRequests).then(() => {
        console.log(this.flights);
        this.dataSource.data = this.flights;
      });
      
    })
  }

}
