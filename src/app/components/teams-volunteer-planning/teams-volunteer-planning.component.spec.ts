import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsVolunteerPlanningComponent } from './teams-volunteer-planning.component';

describe('TeamsVolunteerPlanningComponent', () => {
  let component: TeamsVolunteerPlanningComponent;
  let fixture: ComponentFixture<TeamsVolunteerPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsVolunteerPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsVolunteerPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
