import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { PatientCommand } from '../../models/PatientCommand';
import { SharedModalInfoService } from '../../services/shared-modal-info.service';

@Component({
  selector: 'app-add-update-modal',
  templateUrl: './add-update-modal.component.html',
  styleUrls: ['./add-update-modal.component.css']
})
export class AddUpdateModalComponent implements OnInit {

  patient: PatientCommand = new PatientCommand();
  @Input() userId?: string;
  OpIsUpdate: boolean = false;
  textBtn: string = "there is error";
  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute, private sharedService: SharedModalInfoService) { }
  ngOnInit(): void {

    if(this.userId)
    {
      this.OpIsUpdate = true;
      this.textBtn = "Update Patient"
      this.patientService.Get(this.userId!).subscribe(
        {
          next: data => {
            this.patient = data;
          }
        }
      );
    }
    else{
      this.textBtn = "Add Patient"
    }
  }

  AddPatient() {
    this.patientService.create(this.patient).subscribe({
      next: data => {
          this.textBtn = 'Succeeded';
          this.sharedService.sendEvent(true);
          this.router.navigate(['/'])
      }
    })
  }
  UpdatePatient()
  {
    this.patient.id = this.userId;
    this.patientService.update(this.patient).subscribe({
      next: data => {
         this.textBtn = "Succeeded";
         this.sharedService.sendEvent(true)
         this.router.navigate(['/'])
      }
    })
  }
  onBack()
  {
    this.router.navigate(['/'])
  }

}
