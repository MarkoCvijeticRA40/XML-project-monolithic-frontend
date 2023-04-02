import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';
import { UserService } from 'src/app/service/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TableAvailableFlightsComponent } from '../table-available-flights/table-available-flights.component';
import { TicketInformationComponent } from '../ticket-information/ticket-information.component';
import { TicketService } from 'src/app/service/ticket.service';
import { Ticket } from 'src/app/model/ticket';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-buying-tickets',
  templateUrl: './buying-tickets.component.html',
  styleUrls: ['./buying-tickets.component.css']
})
export class BuyingTicketsComponent implements OnInit {

  public occupancyOld: number = 0;
  public quantityTickets: number = 0;
  public flight: Flight = new Flight();
  public flightPomocni: Flight = new Flight();
  public flightId: any;
  public id: any;
  public ticket: Ticket = new Ticket();
  public currentUser: User = new User();

  constructor(private flightService: FlightService, private route: ActivatedRoute, private ticketService: TicketService, private userService: UserService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {

      this.flightService.getFlight(this.flightId).subscribe(res => {
        this.flight = new Flight(res);
        console.log(this.flight);
      })

    });

    this.id = this.userService.getCurrentUserId();
  }

  public buyTicket(): void{
    console.log(this.quantityTickets);

    if(this.flight.capacity-this.flight.occupancy < this.quantityTickets){
      window.confirm("There are not enough tickets available on the selected flight!");
    }
    else{

      this.occupancyOld = this.flight.occupancy;
      this.flight.occupancy = this.occupancyOld + this.quantityTickets

      this.ticket.userId = this.id;
      this.ticket.flightId = this.flight.id;

      this.ticketService.createTicket(this.ticket).subscribe(res => {
      })

      this.flightService.updateFlight(this.flight).subscribe(res => {
        //window.confirm("Flight tickets have been successfully purchased!");

        const dialogConfig = new MatDialogConfig();

        dialogConfig.id = "modal-component-infoOKarti-next";
        dialogConfig.height = "350px";
        dialogConfig.width = "600px";

        const modalDi = this.dialog.closeAll();
        const modalDialog = this.dialog.open(TicketInformationComponent, dialogConfig);

        modalDialog.componentInstance.letPomocni = this.flight;
      });
    }
  }

  public back() {
    this.dialog.closeAll();
  }

}


