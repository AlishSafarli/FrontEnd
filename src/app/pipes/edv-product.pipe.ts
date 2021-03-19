import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'edvProduct',
})
export class EdvProductPipe implements PipeTransform {
  //Hər bir pipe PipeTransform interfeysini implemente edir.

  transform(value: number, rate: number): number {
    return value + (value * rate) / 100;
  }
}
