/* eslint-disable prettier/prettier */
import { IsEmail, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateCustomerDto {
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age: number;

  @IsEmail()
  email: string;
}
// What is DTO?
// DTO stands for Data Transfer Object.
// The task is: to define the data (HTTP request body) that will come from the user/client in a specific shape/format.
// It is used for both type safety + validation.

//* use there validation pipe for validation because it more secure
