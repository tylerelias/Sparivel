import { TestBed } from '@angular/core/testing';

import { NonIndexedCalculatorService } from './non-indexed-calculator.service';

describe('NonIndexedCalculatorService', () => {
  let service: NonIndexedCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonIndexedCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
