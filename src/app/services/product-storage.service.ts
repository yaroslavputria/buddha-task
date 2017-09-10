import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Product } from '../product';

const products: Product[] = [
    {
        id: 1,
        imageUrl: 'assets/products-images/product1.jpg',
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quas tempore autem saepe necessitatibus et est accusantium ratione! Sunt, reprehenderit aliquam nisi repellendus cum maiores repudiandae ut quis facere. Explicabo.',
        price: 24.5
    },
    {
        id: 2,
        imageUrl: 'assets/products-images/product2.jpg',
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quas tempore autem saepe necessitatibus et est accusantium ratione! Sunt, reprehenderit aliquam nisi repellendus cum maiores repudiandae ut quis facere. Explicabo.',
        price: 124.5
    },
    {
        id: 3,
        imageUrl: 'assets/products-images/product3.jpg',
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quas tempore autem saepe necessitatibus et est accusantium ratione! Sunt, reprehenderit aliquam nisi repellendus cum maiores repudiandae ut quis facere. Explicabo.',
        price: 224.5
    },
    {
        id: 4,
        imageUrl: 'assets/products-images/product4.jpg',
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quas tempore autem saepe necessitatibus et est accusantium ratione! Sunt, reprehenderit aliquam nisi repellendus cum maiores repudiandae ut quis facere. Explicabo.',
        price: 242
    }
];

@Injectable()
export class ProductStorageService {
    private productStorage: Product[];

    constructor(private storage: LocalStorageService) {
        this.productStorage = <Product[]>this.storage.get('products');
        if (!this.productStorage) {
            this.productStorage = products;
            this.storage.set('idIterator', 4); // see const product last id
        }
    }

    getProducts(): Product[] {
        return this.productStorage;
    }

    getProduct(id): Product {
        return this.productStorage[this.getIndexById(id)];
    }

    deleteProduct(id) {
        this.productStorage.splice(this.getIndexById(id), 1);
        this.updateLocalStorage();
    }

    createProduct(p) {
        this.productStorage.push(this.productFactory(p));
        this.updateLocalStorage();
    }

    updateProduct(id, p) {
        this.productStorage[this.getIndexById(id)] = p;
        this.updateLocalStorage();
    }

    private updateLocalStorage() {
        this.storage.set('products', this.productStorage)
    }

    private getIndexById(id) {
        let index;
        this.productStorage.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        });
        return index;
    }

    private productFactory(p): Product {
        let product = {
            id: <number>this.storage.get('idIterator') + 1
        };
        this.storage.set('idIterator', product.id)
        return Object.assign(product, p)
    }
}
