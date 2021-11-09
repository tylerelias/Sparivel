import { TestBed } from '@angular/core/testing';

import { CalculatedNonIndexedService } from './calculated-non-indexed.service';

describe('CalculatedNonIndexedService', () => {
  let service: CalculatedNonIndexedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatedNonIndexedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
