import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientCommandModalComponent } from './components/patient-command-modal/patient-command-modal.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { AddUpdateModalComponent } from './components/AddUpdateModalComponent/add-update-modal.component';
import { TestFromComponent } from './test/test-from.component';


@NgModule({
  declarations: [
    ModalContainerComponent,
    PatientListComponent,
    PatientDetailsComponent,
    SearchComponent,
    PatientCommandModalComponent,
    AddUpdateModalComponent,
    TestFromComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
    ],
  exports: [
    FormsModule
  ]
})
export class PatientModule { }
