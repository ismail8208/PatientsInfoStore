import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient = new Patient();
  userId: string ='';
  isLoaded: boolean = false;
  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.userId+= this.route.snapshot.paramMap.get('id');
    this.patientService.Get(this.userId).subscribe(
      {
        next: data => {
          this.patient = data;
          console.log(this.patient);
          this.isLoaded = true;
        }
      }
    );
  }

  onBack()
  {
    this.router.navigate(['/'])
  }
}
