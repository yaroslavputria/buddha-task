import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

import { Routes } from './routes';

import { ProductStorageService } from './services/product-storage.service';
import { RequiredFileDirective } from './directives/required-file.directive';
import { FileValueAccessorDirective } from './directives/file-value-accessor.directive';
import { UploadImgOnlyDirective } from './directives/upload-img-only.directive';
import { PriceValidateDirective } from './directives/price-validate.directive';


@NgModule({
    declarations: [
        AppComponent,
        ProductDetailsComponent,
        ProductListComponent,
        ProductCreateComponent,
        ProductListItemComponent,
        ModalConfirmComponent,
        RequiredFileDirective,
        FileValueAccessorDirective,
        UploadImgOnlyDirective,
        PriceValidateDirective
    ],
    entryComponents: [
        ModalConfirmComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'product-app',
            storageType: 'localStorage'
        }),
        Routes
    ],
    providers: [
        ProductStorageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
