import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningResultPublicComponent } from './running-result-public.component';

describe('RunningResultPublicComponent', () => {
  let component: RunningResultPublicComponent;
  let fixture: ComponentFixture<RunningResultPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningResultPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningResultPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
