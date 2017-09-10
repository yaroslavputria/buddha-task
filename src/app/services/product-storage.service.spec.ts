import { TestBed, inject } from '@angular/core/testing';

import { ProductStorageService } from './product-storage.service';

describe('ProductStorageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductStorageService]
        });
    });

    it('should be created', inject([ProductStorageService], (service: ProductStorageService) => {
        expect(service).toBeTruthy();
    }));
});
