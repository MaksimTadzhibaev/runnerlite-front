import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetAdminComponent } from './cabinet-admin.component';

describe('CabinetAdminComponent', () => {
  let component: CabinetAdminComponent;
  let fixture: ComponentFixture<CabinetAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
