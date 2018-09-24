import { ComponentFactoryResolver, Injectable, ViewContainerRef, CompoentRef, Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ModalService {
    private modalInstance: ComponentRef<Component>;
    private modalData: any;
    private modalEvents = new Subject<any>();

    constructor(
        private factoryResolver: ComponentFactoryResolver
    ) {}

    createModal(rootViewContainer: ViewContainerRef, component: any, data?: any) {
        this.modalData = data || null;
        let modalFactory = this.factoryResolver.resolveComponentFactory(component);
        this.modalInstance = modalFactory.create(rootViewContainer.injector);
        rootViewContainer.insert(this.modalInstance.hostView);
    }

    getModalData() {
        return this.modalData;
    }

    getEvents(): Observable<any> {
        return this.modalEvents.asObservable();
    }

    emitConfirm(msg?: string) {
        let event = msg || 'confirm';
        this.modalEvents.next(event);
    }

    emitSuccess(msg?: string) {
        let event = msg || 'success';
        this.modalEvents.next(event);
    }

    emitData(data?: any) {
        let event = data || null;
        this.modalEvents.next(event);
    }

    emitCancel(msg?: string) {
        let event = msg || 'cancel';
        this.modalEvents.next(event);
    }

    emitError(msg?: string) {
        let event = msg || 'error';
        this.modalEvents.next(event);
    }

    removeModal() {
        this.modalInstance.destroy();
        this.modalData = null;
    }
}