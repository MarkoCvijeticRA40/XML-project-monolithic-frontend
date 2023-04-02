import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


import { HostComponent } from './host/host.component';
import { BuyingTicketsComponent } from './buying-tickets/buying-tickets.component';
import { TableAvailableFlightsComponent } from './table-available-flights/table-available-flights.component';
import { TicketInformationComponent } from './ticket-information/ticket-information.component';
import { TakenFlightsComponent } from './taken-flights/taken-flights.component';


const routes: Routes = [
  { 
    path: '', component: HostComponent, children: [
    { path: 'availableFlights', component: TableAvailableFlightsComponent },
    { path: 'buyingTickets/forFlight/:id', component: BuyingTicketsComponent },
    { path: 'takenFlights', component: TakenFlightsComponent },


    ]
  }
];

@NgModule({
  declarations: [
    BuyingTicketsComponent,
    HostComponent,
    TableAvailableFlightsComponent,
    TicketInformationComponent,
    TakenFlightsComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
   exports: [ RouterModule ]
})
export class HostModule { }
