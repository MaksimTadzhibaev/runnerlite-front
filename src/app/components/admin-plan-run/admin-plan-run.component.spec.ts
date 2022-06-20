import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanRunComponent } from './admin-plan-run.component';

describe('AdminPlanRunComponent', () => {
  let component: AdminPlanRunComponent;
  let fixture: ComponentFixture<AdminPlanRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlanRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
