import { TestBed } from '@angular/core/testing';

import { CalculatedIndexedService } from './calculated-indexed.service';

describe('CalculatedIndexedService', () => {
  let service: CalculatedIndexedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatedIndexedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
