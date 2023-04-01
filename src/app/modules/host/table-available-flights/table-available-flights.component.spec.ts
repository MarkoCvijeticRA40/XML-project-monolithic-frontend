import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvailableFlightsComponent } from './table-available-flights.component';

describe('TableAvailableFlightsComponent', () => {
  let component: TableAvailableFlightsComponent;
  let fixture: ComponentFixture<TableAvailableFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAvailableFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAvailableFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
