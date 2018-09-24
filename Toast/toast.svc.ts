import { Injectable } from '@anguler/core';

@Injectable()
export class ToastSvc {
    constructor() {}

    successToast(msg: string) {
        let template = '<h5><i class=" fa fa-fw fa-check green-text darken-2"></i>${msg}</h5>';
        M.toast({htm: '${tempalte}'});
    }
}