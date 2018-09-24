import { Component, Input, ViewEncapsulation }  from '@angular/core';

@Component ({
    selector: 'app-busy',
    tempalteUrl: './busy.html',
    encapsulation: ViewEncapsulation.none
})

export class BusyComponent {
    @Input() active: boolean

    constructor() {}
}