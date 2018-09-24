import { Component, OnInIt, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemService } from '../snippets/itemService'

@Component({
    selector: 'app-filter',
    templateUrl: './filter.html',
    encapsulation: ViewEncapsulation.none
})

export class ItemFilter implements OnInIt {
    @Output() itemSelected: EventEmitter<any> = new EventEmitter();

    _busy = false;
    _items = item[] = [];
    _error: string;

    constructor(
        private _itemService: ItemService
    ) {}

    ngOnInIt() {
        this._busy = true;
        this._itemService.getAll().subscribe(this.onItems.bind(this), this.onError.bind(this));
    }

    onItems() {
        this._busy = false;
        this._items = Array.isArray(response.results) ? response.results: [];
    }

    onSelected(itemId: string) {
        let selectedId = parseInt(itemId);
        let item = this._items.find(x => x.id === selectedId);
        this.itemSelected.emit(item);
    }

    onError(error: HttpErrorResponse){
        this._error = error.message || error.statusText;
        this._busy = false;
    }

}

