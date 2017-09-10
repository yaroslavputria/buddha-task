import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
    selector: '[priceValidate]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PriceValidateDirective, multi: true },
    ]
})

export class PriceValidateDirective implements Validator {
    static validate(c: FormControl): {[key: string]: any} {
        let regexp = /^\d+(\.\d{1,2})*$/
        return (regexp.test(c.value)) ? null : {'priceValidate': c.value};

    }

    validate(c: FormControl): {[key: string]: any} {
        return PriceValidateDirective.validate(c);
    }
}
