import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientCreateComponent } from './components/patient-create/patient-create.component';
import { PatientUpdateComponent } from './components/patient-update/patient-update.component';
import { PaginationComponent } from './components/Pagination/pagination.component';

const routes: Routes = [
  { path: '', component:  PatientListComponent},
  { path: 'details/:id', component: PatientDetailsComponent },
  { path: 'create', component: PatientCreateComponent },
  { path: 'update/:id', component: PatientUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
