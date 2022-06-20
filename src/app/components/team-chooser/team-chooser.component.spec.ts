import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChooserComponent } from './team-chooser.component';

describe('TeamChooserComponent', () => {
  let component: TeamChooserComponent;
  let fixture: ComponentFixture<TeamChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
