import { TestBed } from '@angular/core/testing';

import { ChangeDataRunningResultTableService } from './change-data-running-result-table.service';

describe('ChangeDataRunningResultTableService', () => {
  let service: ChangeDataRunningResultTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeDataRunningResultTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
