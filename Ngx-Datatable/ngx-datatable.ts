import { Component, EventEmitter, Input, OnInIt, Output, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Ngx-DatatableService } from './ngx-datatable.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-ngx-datatable',
    templateUrl: './ngx-datatable.html',
    encapsulation: ViewEncapsulation.None
})

export class Ngx-DatatableComponent implements OnInIt, OnDestroy {
    objects: any[];
    originalObjects: any[] = [];
    _error: string;
    searchValue: string;
    objectToDelete: Object;

    constructor(
        private ngxSvc: Ngx-DatatableService,
        private viewContainerRef: ViewContainerRef
    )

    ngOnInIt() {
        this.ngxSvc.getAll().subscribe(this.onObjects.bind(this), this.onError.bind(this));
    }

    onObjects() {
        this.originalObjects = Array.isArray(objects) ? objects : [];
        this.objects = this.originalObjects;
    }

    onError() {
        this.error = error.message || error.statusText;
    }

    onKey(event: KeyboardEvent) {
        this.error = null;
        this.searchValue = (<HTMLInputElement>event.target).value;
        if (!this.searchValue) {
            this.objects = this.originalObjects;
            return;
        }
        this.objects = [];
        this.objects = this.originalObjects.filter(x => JSON.stringify(x).toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1);
    }

    delete(object: Object) {
        this.objectToDelete = object;
    }
}

