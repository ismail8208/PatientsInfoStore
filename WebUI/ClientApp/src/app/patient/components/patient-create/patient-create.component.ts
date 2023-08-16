import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { CreatePatientCommand } from '../../models/CreatePatientCommand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  patient: CreatePatientCommand = new CreatePatientCommand();
  constructor(private patientService: PatientService, private router: Router) { }

  AddBtn: string = 'Add Patient'
  ngOnInit(): void {
  }

  AddPatient() {
    this.patientService.create(this.patient).subscribe({
      next: data => {
          this.AddBtn = 'Succeeded';
          this.router.navigate(['/'])
      }
    })
  }

}