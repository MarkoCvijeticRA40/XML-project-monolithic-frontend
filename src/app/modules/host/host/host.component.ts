import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';
import {UserService} from "../../../service/user.service";


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.router.navigate(['/availableFlights']);
  }

  public home(){
    this.ngOnInit();
  }

  logout(){
    this.userService.logout()
  }
}
