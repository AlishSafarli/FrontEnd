import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: httpcli) {}

  getProducts() {
    //Gelen data-ni ProductResponseModel-e map edirik.
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
