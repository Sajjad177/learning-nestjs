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
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Post()
  addCustomer(@Body(UppercasePipe) createCustomerDto: CreateCustomerDto) {
    return this.customerService.addCustomer(createCustomerDto);
  }
}
