import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
    selector: '[uploadImgOnly]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: UploadImgOnlyDirective, multi: true },
    ]
})

export class UploadImgOnlyDirective implements Validator {
    static validate(c: FormControl): {[key: string]: any} {
        if (c.value && c.value[0]) {
            let ext = c.value[0].name.split('.').pop();
            const allExts = ['jpg', 'png'];
            allExts.some(e => e === ext);
            return allExts.some(e => e === ext) ? null : { "uploadImgOnly" : ext };
        } else {
            return { "uploadImgOnly" : null }
        }

    }

    validate(c: FormControl): {[key: string]: any} {
        return UploadImgOnlyDirective.validate(c);
    }
}
