import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PatientCommandModalComponent } from '../patient-command-modal/patient-command-modal.component';

@Component({
  selector: 'app-modal-container',
  template: '',
  styleUrls: ['../patient-command-modal/patient-command-modal.component.css']
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog: any = null;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {

        // When router navigates on this component is takes the params and opens up the photo detail modal
        this.currentDialog = this.modalService.open(PatientCommandModalComponent, {centered: true,  ariaLabelledBy: 'modal-basic-title', 
        size: 'lg'});
        this.currentDialog.componentInstance.Data = params.id;
        
        // Go back to home page after the modal is closed
        this.currentDialog.result.then(() => {
            router.navigateByUrl('/');
        }, () => {
            router.navigateByUrl('/');
        });
    });
  }

  ngOnDestroy() {
    this.currentDialog.dismiss();
  }
}