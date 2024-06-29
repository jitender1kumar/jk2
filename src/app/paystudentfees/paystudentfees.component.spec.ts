import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaystudentfeesComponent } from './paystudentfees.component';

describe('PaystudentfeesComponent', () => {
  let component: PaystudentfeesComponent;
  let fixture: ComponentFixture<PaystudentfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaystudentfeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaystudentfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
