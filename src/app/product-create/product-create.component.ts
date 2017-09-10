import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductStorageService } from '../services/product-storage.service';

import { RequiredFileDirective } from '../directives/required-file.directive';
import { UploadImgOnlyDirective } from '../directives/upload-img-only.directive';


@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    legend: string;
    cmpType: string;
    productFormGroup: FormGroup;
    editedProduct;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private productService: ProductStorageService) { }

    ngOnInit() {
        this.productFormGroup = new FormGroup({
            'title': new FormControl(),
            'description': new FormControl(),
            'price': new FormControl(),
            'image': new FormControl('', [RequiredFileDirective.validate, UploadImgOnlyDirective.validate])
        });
        this.activatedRoute.url.subscribe(url => {
            if (url[0].path === 'product-create') {
                this.legend = 'Create product';
                this.cmpType = 'create';
            } else if (url[0].path === 'product-edit') {
                this.legend = 'Edit product';
                this.cmpType = 'edit';
                this.activatedRoute.params.subscribe(params => {
                    this.editedProduct = this.productService.getProduct(+params['id']);
                    this.productFormGroup.setValue({
                        'title': this.editedProduct.title,
                        'description': this.editedProduct.description,
                        'price': this.editedProduct.price,
                        'image': [{name: this.editedProduct.imageUrl.split('/').pop()}]
                    });
                });
            }
        });

    }

    onSubmit(e) {
        e.preventDefault();
        if (this.productFormGroup.valid) {
            let p: any = {
                title: this.productFormGroup.value.title,
                description: this.productFormGroup.value.description,
                price: this.productFormGroup.value.price,
            };
            if (this.cmpType === 'create') {
                p.imageUrl = `assets/products-images/${this.productFormGroup.value.image[0].name}`;
                this.productService.createProduct(p);
            } else {
                if (this.productFormGroup.value.image && this.productFormGroup.value.image[0]) {
                    p.imageUrl = `assets/products-images/${this.productFormGroup.value.image[0].name}`;
                }
                this.productService.updateProduct(this.editedProduct.id, Object.assign(this.editedProduct, p));
            }
            this.router.navigate(['']);
        } else {
            this.productFormGroup.controls.description.markAsDirty();
            this.productFormGroup.controls.image.markAsDirty();
            this.productFormGroup.controls.price.markAsDirty();
            this.productFormGroup.controls.title.markAsDirty();
        }
    }

    onCancel() {
        this.router.navigate(['']);
    }

}
