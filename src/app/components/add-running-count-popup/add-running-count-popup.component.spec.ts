import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRunningCountPopupComponent } from './add-running-count-popup.component';

describe('AddRunningCountPopupComponent', () => {
  let component: AddRunningCountPopupComponent;
  let fixture: ComponentFixture<AddRunningCountPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRunningCountPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRunningCountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
