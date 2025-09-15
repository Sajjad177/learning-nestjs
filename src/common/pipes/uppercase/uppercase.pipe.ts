/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

//*_____________________________________________________________
// import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// @Injectable()
// export class UppercasePipe implements PipeTransform {
//   transform(value: any, metadata: ArgumentMetadata) {
//     if (typeof value === 'string') {
//       return value.toUpperCase(); // if it string this convert to uppercase
//     }
//     return value; // if it other type then it return
//   }
// }


import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';


//?if you transform a object in uppercase 
@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === 'object') {
      for (const key in value) {
        if (typeof value[key] === 'string') {
          value[key] = value[key].toUpperCase();
        }
      }
    }
    return value;
  }
}
