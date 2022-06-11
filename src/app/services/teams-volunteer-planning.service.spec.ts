import { TestBed } from '@angular/core/testing';

import { TeamsVolunteerPlanningService } from './teams-volunteer-planning.service';

describe('TeamsVolunteerPlanningService', () => {
  let service: TeamsVolunteerPlanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsVolunteerPlanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
