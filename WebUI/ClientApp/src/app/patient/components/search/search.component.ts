import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() result: EventEmitter<ISearch> = new EventEmitter<ISearch>;
  searchBy?: number = -1; // -1 to get all patient
  
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.search = '';
  }

  public set search(val: string) {
    let resl: ISearch = {
      res:val,
      searchBy:this.searchBy
    };
    this.result.emit(resl)
  }
}

export interface ISearch {
  res: string;
  searchBy?: number;
}
