import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  apiUrl: string = 'https://localhost:44397/api/products';
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };

  //Colden Products nesnesini yaratdiqda, httpClient deyiskenini gormemek ucun onu private edirik.
  constructor() {}

  //Products sehifede acilarken ilk dom terefinden ilk calistirilan metod. Formun load eventi kimi.
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //Gelen data-ni ProductResponseModel-e map edirik.
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
