import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-patient-command-modal',
  templateUrl: './patient-command-modal.component.html',
  styleUrls: ['./patient-command-modal.component.css']
})
export class PatientCommandModalComponent implements OnInit {

  @Input() Data?: string;
  isUpdate: boolean = false;
  ngOnInit(): void {
    if(this.Data)
    {
      this.isUpdate = true;
    }
  }

}
