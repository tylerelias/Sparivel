import { TestBed } from '@angular/core/testing';

import { IndexedCalculatorService } from './indexed-calculator.service';

describe('IndexedCalculatorService', () => {
  let service: IndexedCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
