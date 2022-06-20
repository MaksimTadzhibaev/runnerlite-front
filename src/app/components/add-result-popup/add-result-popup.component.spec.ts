import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResultPopupComponent } from './add-result-popup.component';

describe('AddResultPopupComponent', () => {
  let component: AddResultPopupComponent;
  let fixture: ComponentFixture<AddResultPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResultPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResultPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
