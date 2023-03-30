import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model'
import { FlightService } from 'src/app/service/flight.service';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  public dataSource = new MatTableDataSource<Flight>();
  public displayedColumns = ['departure' , 'destination' , 'price' , 'capacity' , 'occupancy' , 'departureDate' , 'deleteFlight'];


  constructor(private flightService: FlightService, private router: Router) { }



  ngOnInit(): void {
    this.loadFLights()
  }

  public loadFLights(){
    this.flightService.getFlights().subscribe(res => {
      this.dataSource.data = res
    })

  }

  public deleteFlight(flight: Flight) {
    this.flightService.deleteFlight(flight.id).subscribe(res => {
      this.loadFLights()
      alert("Flight from " + flight.departure + " to " + flight.destination  + " is deleted . " )
    })

  }
}
