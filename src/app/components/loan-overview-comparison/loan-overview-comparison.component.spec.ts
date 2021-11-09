import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewComparisonComponent } from './loan-overview-comparison.component';

describe('LoanOverviewComparisonComponent', () => {
  let component: LoanOverviewComparisonComponent;
  let fixture: ComponentFixture<LoanOverviewComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
