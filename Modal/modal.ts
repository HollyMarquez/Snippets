import { Componet, OnInIt, ViewContainerRef, Output } from '@angular/core';
import { EventEmitter } from 'events' ;
import { ModalService } from  '/modal.svc';

@Component ({
    selector: '<app-modal (cancelled)="onCancel($event)"><app-modal>',
    templateUrl: './modal.html'
})

export class ModalComponent {
    constructor(
        private viewContainerRef: ViewContainerRef
    ) {}

    cancel() {
        this.modalEventSvc.cancel();
    }
}