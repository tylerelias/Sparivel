import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOverviewIndexationComponent } from './loan-overview-indexation.component';

describe('LoanOverviewIndexationComponent', () => {
  let component: LoanOverviewIndexationComponent;
  let fixture: ComponentFixture<LoanOverviewIndexationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOverviewIndexationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOverviewIndexationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
