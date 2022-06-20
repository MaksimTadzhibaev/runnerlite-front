import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRunningCountHistoryComponent } from './team-running-count-history.component';

describe('TeamRunningCountHistoryComponent', () => {
  let component: TeamRunningCountHistoryComponent;
  let fixture: ComponentFixture<TeamRunningCountHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamRunningCountHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRunningCountHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
