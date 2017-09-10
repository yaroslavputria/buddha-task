import { Component, Input, EventEmitter } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {
    @Input() title;
    @Input() message;

    confirmEE = new EventEmitter();

    constructor(public activeModal: NgbActiveModal) { }

    confirm() {
        this.confirmEE.emit();
        this.activeModal.dismiss();
    }

}
