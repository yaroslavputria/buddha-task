import { RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component'

export const Routes = RouterModule.forRoot([
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'product-edit/:id',
        component: ProductCreateComponent
    },
    {
        path: 'product-create',
        component: ProductCreateComponent
    },
])
