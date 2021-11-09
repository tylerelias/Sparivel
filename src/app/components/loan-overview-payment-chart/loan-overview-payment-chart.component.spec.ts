import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewPaymentChartComponent } from './loan-overview-payment-chart.component';

describe('LoanOverviewPaymentChartComponent', () => {
  let component: LoanOverviewPaymentChartComponent;
  let fixture: ComponentFixture<LoanOverviewPaymentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewPaymentChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewPaymentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
