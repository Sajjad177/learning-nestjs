/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.addCustomer(createCustomerDto);
  }
}
