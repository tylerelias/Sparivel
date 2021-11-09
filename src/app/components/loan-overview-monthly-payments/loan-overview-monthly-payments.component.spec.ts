import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewMonthlyPaymentsComponent } from './loan-overview-monthly-payments.component';

describe('LoanOverviewMonthlyPaymentsComponent', () => {
  let component: LoanOverviewMonthlyPaymentsComponent;
  let fixture: ComponentFixture<LoanOverviewMonthlyPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewMonthlyPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewMonthlyPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
