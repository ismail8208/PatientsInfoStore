import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/Pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailsComponent,
    PatientCreateComponent,
    PatientUpdateComponent,
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class PatientModule { }
