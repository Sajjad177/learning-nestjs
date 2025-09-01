/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    // constructor is a special function that connects the controller to the service
    constructor(private readonly productService: ProductService) {}

    //get all products
    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

    //get product by id
    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));
    }
}

//! start in : 6 no video