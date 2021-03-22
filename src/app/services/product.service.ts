import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponseModel } from '../models/genericResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<GenericResponseModel<Product>> {
    let newPath = environment.apiBaseURL + 'products/getall';
    //Gelen data-ni GenericResponseModel<T>-e map edib, gelen data-nin bir observable oldugunu deyirik.
    return this.httpClient.get<GenericResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<GenericResponseModel<Product>> {
    let newPath =
      environment.apiBaseURL +
      'products/getallbycategory?categoryId=' +
      categoryId;
    return this.httpClient.get<GenericResponseModel<Product>>(newPath);
  }
}
