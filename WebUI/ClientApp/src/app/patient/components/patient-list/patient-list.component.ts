import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatientDto } from '../../models/IPatientDto';
import { IPaginatedListPatient } from '../../models/IPaginatedListPatient';
import { ISearch } from '../search/search.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: IPatientDto[] | undefined = [];
  totalCount?: number;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  searchResult?: ISearch;


  constructor(private patientService: PatientService) { }


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
  }
  deletePatient(userId?: string) {
    if (confirm(`Click OK to delete Patient`)) {
      this.patientService.Delete(userId!).subscribe();
      this.patients = this.patients!.filter(p => p.id !== userId);
    }
  }
}
