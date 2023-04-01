import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flight } from 'src/app/model/flight.model';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-information',
  templateUrl: './ticket-information.component.html',
  styleUrls: ['./ticket-information.component.css']
})
export class TicketInformationComponent implements OnInit {

  public karta: Flight = new Flight();
  public letPomocni: Flight = new Flight();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.karta = this.letPomocni;
    console.log(this.karta);
  }

  public finish() {
    this.dialog.closeAll();
  }

  
}
