import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { updatePatientCommand } from '../../models/UpdatePatientCommand';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {

  patient: updatePatientCommand = new updatePatientCommand();
  userId: string ='';
  UpdateBtn: string = "Update Patient"
  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.userId+= this.route.snapshot.paramMap.get('id');
    this.patientService.Get(this.userId).subscribe(
      {
        next: data => {
          this.patient = data;
        }
      }
    );
  }

  UpdatePatient()
  {
    this.patient.id = this.userId;
    this.patientService.update(this.patient).subscribe({
      next: data => {
        if(data)
        {
         this.UpdateBtn = "Succeeded";
         this.router.navigate(['/'])
        }
      }
    })
  }
}
