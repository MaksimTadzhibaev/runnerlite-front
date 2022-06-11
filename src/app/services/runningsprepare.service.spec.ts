import { TestBed } from '@angular/core/testing';

import { RunningsprepareService } from './runningsprepare.service';

describe('RunningsprepareService', () => {
  let service: RunningsprepareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningsprepareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
