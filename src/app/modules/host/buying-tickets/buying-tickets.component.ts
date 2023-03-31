import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-buying-tickets',
  templateUrl: './buying-tickets.component.html',
  styleUrls: ['./buying-tickets.component.css']
})
export class BuyingTicketsComponent implements OnInit {

  public idFlight: string = '';
  public quantityTickets: number = 0;
  public flight: Flight = new Flight();

  constructor(private flightService: FlightService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public NaciLetPoId(idFlight: string){
    this.flightService.getFlight(idFlight).subscribe(res => {
      this.flight.id = res.id;
      this.flight.departure = res.departure;
      this.flight.destination = res.destination;
      this.flight.price = res.price;
      this.flight.capacity = res.capacity;
      this.flight.occupancy = res.occupancy;
      this.flight.departureDate = res.departureDate;
    })

    console.log(this.flight);
    console.log(this.flight.departure);
  }

  public buyTicket(){
    console.log(this.idFlight);
    console.log(this.quantityTickets);

    if(this.flight.capacity-this.flight.occupancy < this.quantityTickets){
      window.confirm("There are not enough tickets available on the selected flight!");
    }
    else{
      this.flightService.updateFlightbuyTicket(this.flight, this.idFlight, this.quantityTickets).subscribe(res => {
        window.confirm("Flight tickets have been successfully purchased!");
      });
    }

  }

}
