/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
  // constructor is a special function that connects the controller to the service
  constructor(private readonly productService: ProductService) {}

  //get all products
  @Get()
  @UseGuards(AuthGuard)
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
