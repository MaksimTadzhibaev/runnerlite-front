import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVolunteerInfoComponent } from './admin-volunteer-info.component';

describe('AdminVolunteerInfoComponent', () => {
  let component: AdminVolunteerInfoComponent;
  let fixture: ComponentFixture<AdminVolunteerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVolunteerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVolunteerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
