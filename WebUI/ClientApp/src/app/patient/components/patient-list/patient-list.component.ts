import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatientDto } from '../../models/IPatientDto';
import { IPaginatedListPatient } from '../../models/IPaginatedListPatient';
import { ISearch } from '../search/search.component';
import { Router } from '@angular/router';
import { PatientCommandModalComponent } from '../patient-command-modal/patient-command-modal.component';
import { SharedModalInfoService } from '../../services/shared-modal-info.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: IPatientDto[] | undefined = [];
  newPatient?: IPatientDto;
  totalCount?: number;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  searchResult?: ISearch;


  constructor(private patientService: PatientService, private router: Router, private sharedService: SharedModalInfoService) { }


  result(res: ISearch) {
    this.searchResult = res;
    this.getPatients(this.currentPage);
  }

  getPatients(currentPage: number) {
    this.patientService.getPatients(currentPage, this.itemsPerPage, this.searchResult!.res, this.searchResult!.searchBy).subscribe({
      next: data => {
        this.patients = data.items;
        this.totalCount = data.totalCount;
      }
    })
  }
  ngOnInit(): void {
    this.sharedService.data$.subscribe(
      {
        next: event => {
          if (event) {
            this.getPatients(this.currentPage);
          }
        }
      }
    )
  }
  deletePatient(userId?: string) {
    if (confirm(`Click OK to delete Patient`)) {
      this.patientService.Delete(userId!).subscribe();
      this.patients = this.patients!.filter(p => p.id !== userId);
    }
  }


  //test 
  onActivate(patientCommandModalComponent: PatientCommandModalComponent) {

  }

  // navigateToModal() {
  //   const dataToSend = { message: 'Hello from HomeComponent' };

  //   this.router.navigate(['Add'], {
  //     state: { myData: dataToSend },
  //   });
  // }
}
