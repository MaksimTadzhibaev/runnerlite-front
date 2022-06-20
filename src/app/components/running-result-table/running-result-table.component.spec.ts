import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningResultTableComponent } from './running-result-table.component';

describe('RunningResultTableComponent', () => {
  let component: RunningResultTableComponent;
  let fixture: ComponentFixture<RunningResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
