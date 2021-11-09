import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanDownpaymentComponent } from './user-loan-downpayment.component';

describe('UserLoanDownpaymentComponent', () => {
  let component: UserLoanDownpaymentComponent;
  let fixture: ComponentFixture<UserLoanDownpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoanDownpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoanDownpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
