import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyingTicketsComponent } from './buying-tickets/buying-tickets.component';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesComponent } from '../pages/pages/pages.component';

const routes: Routes = [
  { path: 'buyingTickets', component: BuyingTicketsComponent },
];

@NgModule({
  declarations: [
    BuyingTicketsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
   exports: [ RouterModule ]
})
export class HostModule { }
