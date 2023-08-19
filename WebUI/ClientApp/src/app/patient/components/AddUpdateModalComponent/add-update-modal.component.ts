import { Component, Input, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientCommand } from '../../models/PatientCommand';
import { SharedModalInfoService } from '../../services/shared-modal-info.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-modal',
  templateUrl: './add-update-modal.component.html',
  styleUrls: ['./add-update-modal.component.css']
})
export class AddUpdateModalComponent implements OnInit {

  @Input() userId?: string;
  OpIsUpdate: boolean = false;
  textBtn: string = '';
  patientForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    fileNo: ['', Validators.required],
    citizenId: ['', Validators.required],
    birthdate: ['', Validators.required],
    gender: [1, Validators.required],
    natinality: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    contactPerson: ['', Validators.required],
    contactRelation: ['', Validators.required],
    contactPhone: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    firstVisitDate: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router,
    private sharedService: SharedModalInfoService) { }

  ngOnInit(): void {

    if (this.userId) {
      this.OpIsUpdate = true;
      this.textBtn = "Update Patient"
      this.patientService.Get(this.userId!).subscribe(
        {
          next: data => {
            this.patientForm.setValue(
              {
                ...data,
                gender: data.gender + '',
                birthdate: (new Date(data.birthdate)).toISOString().substring(0, 10),
                firstVisitDate: (new Date(data.firstVisitDate)).toISOString().substring(0, 10),
              }
            );
          }
        }
      );
    }
    else {
      this.textBtn = "Add Patient"
    }
  }

  sendFormData() {
    if (this.OpIsUpdate) {
      this.UpdatePatient();
    }
    else {
      this.AddPatient();
    }
  }

  AddPatient() {
    this.patientForm.patchValue({
      gender: parseInt(this.patientForm.get('gender')?.value + '')
    })
    this.patientService.create(this.patientForm.value as PatientCommand).subscribe({
      next: data => {
        this.textBtn = 'Succeeded';
        this.sharedService.sendEvent(true);
        this.router.navigate(['/'])
      }
    })
  }

  UpdatePatient() {
    this.patientForm.patchValue({
      id: this.userId,
      gender: parseInt(this.patientForm.get('gender')?.value + '')
    })
    this.patientService.update(this.patientForm.value as PatientCommand).subscribe({
      next: data => {
        this.textBtn = "Succeeded";
        this.sharedService.sendEvent(true)
        this.router.navigate(['/'])
      }
    })
  }

  onBack() {
    this.router.navigate(['/'])
  }

  //to navigate between fields using ( Arrow Down, Arrow Up )
  @ViewChild('myForm') myForm?: ElementRef;
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const formFields = this.myForm!.nativeElement.querySelectorAll('input, select, textarea');
    const focusedElement = document.activeElement;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const currentIndex = Array.from(formFields).indexOf(focusedElement);

      if (currentIndex !== -1) {
        const nextIndex = event.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
        if (formFields[nextIndex]) {
          formFields[nextIndex].focus();
        }
      }
    }
  }
}
