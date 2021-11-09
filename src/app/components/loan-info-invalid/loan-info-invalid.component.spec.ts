import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanInfoInvalidComponent } from './loan-info-invalid.component';

describe('LoanInfoInvalidComponent', () => {
  let component: LoanInfoInvalidComponent;
  let fixture: ComponentFixture<LoanInfoInvalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanInfoInvalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInfoInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
