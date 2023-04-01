import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BuyingTicketsComponent } from '../buying-tickets/buying-tickets.component';
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-table-available-flights',
  templateUrl: './table-available-flights.component.html',
  styleUrls: ['./table-available-flights.component.css']
})
export class TableAvailableFlightsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['departure' , 'destination' , 'price' , 'capacity' , 'occupancy' , 'departureDate' , 'buyTickets'];

  constructor(private flightService: FlightService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.dialog.afterAllClosed.subscribe(
      data => this.loadFLights()
    );  

    this.loadFLights();
  }

  public loadFLights(){
    this.flightService.getFlights().subscribe(res => {
      this.dataSource.data = res
    })
  }

  public buyTicketsForFlight(id: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    const modalDialog = this.dialog.open(BuyingTicketsComponent, dialogConfig);
    modalDialog.componentInstance.flightId = id;
    
  }
  

}
