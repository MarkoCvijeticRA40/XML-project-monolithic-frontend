import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenFlightsComponent } from './taken-flights.component';

describe('TakenFlightsComponent', () => {
  let component: TakenFlightsComponent;
  let fixture: ComponentFixture<TakenFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakenFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakenFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
