import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInformationComponent } from './ticket-information.component';

describe('TicketInformationComponent', () => {
  let component: TicketInformationComponent;
  let fixture: ComponentFixture<TicketInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
