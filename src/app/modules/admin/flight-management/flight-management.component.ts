import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model'
import { FlightService } from 'src/app/service/flight.service';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements OnInit {

  public flight: Flight = new Flight();

  public currentDate: Date = new Date();
  public tomorrowDate : Date = new Date();
  hour : number = 0 ;
  minute : number = 0;
  hours = [
    {value: 0, viewValue: '00'},
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'},
    {value: 7, viewValue: '7'},
    {value: 8, viewValue: '8'},
    {value: 9, viewValue: '9'},
    {value: 10, viewValue: '10'},
    {value: 11, viewValue: '11'},
    {value: 12, viewValue: '12'},
    {value: 13, viewValue: '13'},
    {value: 14, viewValue: '14'},
    {value: 15, viewValue: '15'},
    {value: 16, viewValue: '16'},
    {value: 17, viewValue: '17'},
    {value: 18, viewValue: '18'},
    {value: 19, viewValue: '19'},
    {value: 20, viewValue: '20'},
    {value: 21, viewValue: '21'},
    {value: 22, viewValue: '22'},
    {value: 23, viewValue: '23'},
    {value: 24, viewValue: '00'},

  ];


  minutes = [
    {value: 0, viewValue: '00'},
    {value: 10,   viewValue: '10'},
    {value: 15,  viewValue: '15'},
    {value: 20,   viewValue: '20'},
    {value: 25,   viewValue: '25'},
    {value: 30,  viewValue: '30'},
    {value: 35,   viewValue: '35'},
    {value: 40,   viewValue: '40'},
    {value: 45,   viewValue: '45'},
    {value: 50,   viewValue: '50'},
    {value: 60,   viewValue: '60'},
    {value: 60,  viewValue: '60'},

  ];

  constructor(private flightService: FlightService, private router: Router) { }

  createFlight(){
    this.setTime()

    if(this.isInputValid()){
      this.flightService.createFlight(this.flight).subscribe(res => {
        alert("You have successfully created flight !");
      })

      }else{
      alert("You must fill in all fields!")
    }

  }


  public setTime() {
    this.flight.departureDate.setHours(0);
    this.flight.departureDate.setSeconds(0);
    this.flight.departureDate.setMilliseconds(0);
    this.flight.departureDate.setHours(this.hour);
    this.flight.departureDate.setMinutes(this.minute);
  }
  private isInputValid(): boolean {
    return this.flight.departure != ''  &&  this.flight.destination != '' &&  this.flight.capacity  > 0 /*&&  this.flight.occupancy  > 0 */&&  this.flight.price  > 0 ;

  }

  requiredDepartureControl = new FormControl('', [
    Validators.required,
  ]);

  requiredDestinationControl = new FormControl('', [
    Validators.required,
  ]);

  requiredDepartureDateControl = new FormControl('', [
    Validators.required,
  ]);

  requiredPrice = new FormControl('', [
    Validators.required,
  ]);

  requiredCapacity = new FormControl('', [
    Validators.required,
  ]);

  /*
  requiredOccupancy = new FormControl('', [
    Validators.required,
  ]);
  */

  ngOnInit(): void {

    this.tomorrowDate.setDate(this.currentDate.getDate() + 1);

  }

}
