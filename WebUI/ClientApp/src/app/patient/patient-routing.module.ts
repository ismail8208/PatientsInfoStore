import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';

const routes: Routes = [
  {
    path: '', component: PatientListComponent,
    children: [
      {
        path:  ':id',
        component: ModalContainerComponent,
        outlet: 'update',
      },
      {
        path:  'add',
        component: ModalContainerComponent,
        outlet: 'patient',
      }
    ]
  },
  {
    path: 'details/:id', component: PatientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
