import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerTemplateComponent } from './volunteer-template.component';

describe('VolunteerTemplateComponent', () => {
  let component: VolunteerTemplateComponent;
  let fixture: ComponentFixture<VolunteerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
