import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewInterestComponent } from './loan-overview-interest.component';

describe('LoanOverviewInterestComponent', () => {
  let component: LoanOverviewInterestComponent;
  let fixture: ComponentFixture<LoanOverviewInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
