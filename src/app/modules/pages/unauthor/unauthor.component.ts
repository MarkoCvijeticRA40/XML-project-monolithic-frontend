import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-unauthor',
  templateUrl: './unauthor.component.html',
  styleUrls: ['./unauthor.component.css']
})
export class UnauthorComponent implements OnInit {

  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['departure' , 'destination' , 'price' , 'capacity' , 'occupancy' , 'departureDate'];
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

  public loadFLights(){
    this.flightService.getFlights().subscribe(res => {
      this.dataSource.data = res
    })
  }

  private isInputValid(): boolean {
    return this.departure != ''  &&  this.destination != '' &&  this.occupancy  > 0;
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

        this.displayedColumns = ['departure' , 'destination' , 'price' , 'capacity' , 'occupancy' , 'departureDate' , 'totalCost'];
        this.dataSource.data = this.searchedFlights;
        console.log(this.searchedFlights);
      })
      }
      else 
      {
        alert("You must fill in all fields!");
      }
    }
}