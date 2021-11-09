import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewTotalCostComponent } from './loan-overview-total-cost.component';

describe('LoanOverviewTotalCostComponent', () => {
  let component: LoanOverviewTotalCostComponent;
  let fixture: ComponentFixture<LoanOverviewTotalCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewTotalCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewTotalCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
