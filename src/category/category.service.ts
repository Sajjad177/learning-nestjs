/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategory() {
    return ['mobile', 'laptop', 'tv'];
  }
}
