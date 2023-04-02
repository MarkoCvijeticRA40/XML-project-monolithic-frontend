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
  departure : string = '';
  destination : string = '';
  occupancy: number = 0;
  departureDate: Date = new Date();
  searchedFlights: Flight[] = [];
  searchPerformed = false;


  constructor(private flightService: FlightService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.dialog.afterAllClosed.subscribe(
      data => this.loadFLights()
    );  

    this.loadFLights();
  }

  private isInputValid(): boolean {
    return this.departure != ''  &&  this.destination != '' &&  this.occupancy  > 0;
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

  onSearch() {
  
    if(this.isInputValid())
    {
    
    this.searchedFlights = [];
      this.searchPerformed = true;
  
      this.flightService.getAllFlightBySearch(this.departureDate, this.departure,this.destination, this.occupancy).subscribe(res => {
        let result = Object.values(JSON.parse(JSON.stringify(res)));
        result.forEach((element: any) => {
          var app = new Flight(element);
          this.searchedFlights.push(app);
        });

        this.displayedColumns = ['departure' , 'destination' , 'price' , 'capacity' , 'occupancy' , 'departureDate' , 'totalCost', 'buyTickets'];
        this.dataSource.data = this.searchedFlights;
        console.log(this.searchedFlights);
        
  
      })
    }
    else {
      alert("You must fill in all fields!");
    }
  }   
} 


