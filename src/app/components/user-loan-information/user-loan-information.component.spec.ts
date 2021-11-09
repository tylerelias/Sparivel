import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoanInformationComponent } from './user-loan-information.component';

describe('UserLoanInformationComponent', () => {
  let component: UserLoanInformationComponent;
  let fixture: ComponentFixture<UserLoanInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoanInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoanInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
