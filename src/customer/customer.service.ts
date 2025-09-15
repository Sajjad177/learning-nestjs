/* eslint-disable prettier/prettier */
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Injectable } from '@nestjs/common';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(CreateCustomerDto: CreateCustomerDto): Customer {
    const newCustomer = {
      id: this.customers.length + 1,
      ...CreateCustomerDto,
    };
    this.customers.push(newCustomer as Customer);
    return newCustomer;
  }
}
