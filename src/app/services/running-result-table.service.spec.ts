import { TestBed } from '@angular/core/testing';

import { RunningResultTableService } from './running-result-table.service';

describe('RunningResultTableService', () => {
  let service: RunningResultTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningResultTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
