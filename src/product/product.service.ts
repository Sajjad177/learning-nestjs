/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
            id: 1,
            name: 'product1',
            price: 1000,
        },
        {
            id: 2,
            name: 'product2',
            price: 2000,
        },
        {
            id: 3,
            name: 'product3',
            price: 3000,
        },
    ]
    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
}
