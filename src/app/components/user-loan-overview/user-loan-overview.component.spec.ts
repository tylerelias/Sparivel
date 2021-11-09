import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanOverviewComponent } from './user-loan-overview.component';

describe('UserLoanOverviewComponent', () => {
  let component: UserLoanOverviewComponent;
  let fixture: ComponentFixture<UserLoanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoanOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
