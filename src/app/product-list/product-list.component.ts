import { Component, OnInit } from '@angular/core';

import { ProductStorageService } from '../services/product-storage.service';

import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product';

import { Router } from '@angular/router'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];

    constructor(private productService: ProductStorageService,
                private router: Router,
                private modalService: NgbModal) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    createProduct() {
        this.router.navigate(['/product-create']);
    }

    deleteProductById(id, index) {
        let deletingProd = this.products[index];
        const modalRef = this.modalService.open(ModalConfirmComponent);
        modalRef.componentInstance.title = 'Delete product';
        modalRef.componentInstance.message = `Are You sure You want to delete ${deletingProd.title}?`;
        const subscrd = modalRef.componentInstance.confirmEE.subscribe(() => {
            this.productService.deleteProduct(id);
            this.products.splice(index, 1);
            subscrd.unsubscribe();
        });
    }

}
