import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorComponent } from './unauthor.component';

describe('UnauthorComponent', () => {
  let component: UnauthorComponent;
  let fixture: ComponentFixture<UnauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
