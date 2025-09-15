/* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import {
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
//   ValidationArguments,
//   registerDecorator,
//   ValidationOptions,
// } from 'class-validator';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Customer } from '../entities/customer.entity';

// @ValidatorConstraint({ async: true })
// @Injectable()
// export class IsUniqueConstraint implements ValidatorConstraintInterface {
//   constructor(
//     @InjectModel(Customer.name) private customerModel: Model<Customer>,
//   ) {}

//   async validate(value: any, args: ValidationArguments) {
//     const existing = await this.customerModel.findOne({
//       [args.property]: value,
//     });
//     return !existing; // true হলে valid, false হলে invalid
//   }

//   defaultMessage(args: ValidationArguments) {
//     return `${args.property} must be unique`;
//   }
// }

// export function IsUnique(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName,
//       options: validationOptions,
//       validator: IsUniqueConstraint,
//     });
//   };
// }
