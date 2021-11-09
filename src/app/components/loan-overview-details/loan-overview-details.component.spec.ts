import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewDetailsComponent } from './loan-overview-details.component';

describe('LoanOverviewDetailsComponent', () => {
  let component: LoanOverviewDetailsComponent;
  let fixture: ComponentFixture<LoanOverviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
