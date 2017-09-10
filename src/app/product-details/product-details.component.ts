import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductStorageService } from '../services/product-storage.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    currentProduct;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private productService: ProductStorageService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.currentProduct = this.productService.getProduct(+params['id']);
        });
    }

    goBack() {
        this.location.back();
    }

}
