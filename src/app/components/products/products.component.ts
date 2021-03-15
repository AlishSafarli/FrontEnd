import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  /*
  Angular-da bir servizi istifade etmek ucun onu 
  saxladigimiz service-lerden istifade edeceyimizi import edib
  komponentin constructor-na inject edirik.
  */

  constructor(private productService: ProductService) {}

  //Products sehifede acilarken ilk dom terefinden ilk calistirilan metod. Formun load eventi kimi.
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
