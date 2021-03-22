import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    //Yoxlayirig ki, dogurdan da filter ucun paramter girilib mi?
    //Girilibse kicik herife transform edirik, eksine boslug donderirik.
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    /*Filter olunmus text varsa, arrayin(value) icini gezib, 
    c#-daki linq query kimi qarsilasdiririg kicik herfli data adlari ile.
    Cunki js letter sensetivdi. Axtarilacaq deyeri ve arraydaki product name-i 
    buncun lower case eledik*/
    return filterText
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(filterText) !== -1 // yeniki varsa
        )
      : value;
  }
}
