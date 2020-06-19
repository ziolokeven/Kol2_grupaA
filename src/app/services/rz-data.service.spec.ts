import { TestBed } from '@angular/core/testing';

import { RZDataService } from './rz-data.service';

describe('RZDataService', () => {
  let service: RZDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RZDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
