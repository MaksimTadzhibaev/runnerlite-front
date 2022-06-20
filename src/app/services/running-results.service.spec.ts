import { TestBed } from '@angular/core/testing';

import { RunningResultsService } from './running-results.service';

describe('RunningResultsService', () => {
  let service: RunningResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
