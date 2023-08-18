import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCommandModalComponent } from './patient-command-modal.component';

describe('PatientCommandModalComponent', () => {
  let component: PatientCommandModalComponent;
  let fixture: ComponentFixture<PatientCommandModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCommandModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCommandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
