import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

    @Input('product') product;
    @Output('deleteProduct') deleteProductEE = new EventEmitter();

    constructor(private router: Router) {

    }

    ngOnInit() {
    }

    goToDetails() {
        this.router.navigate(['/product', this.product.id]);
    }

    editProduct() {
        this.router.navigate(['/product-edit', this.product.id]);
    }

    deleteProduct() {
        this.deleteProductEE.emit(this.product.id);
    }

}
