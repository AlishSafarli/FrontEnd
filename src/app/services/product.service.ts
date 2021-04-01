import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericResponseModel } from '../models/genericResponseModel';
import { GenericSingleModel } from '../models/genericSingleModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

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

  getProductById(productId: number): Observable<GenericSingleModel<Product>> {
    return this.httpClient.get<GenericSingleModel<Product>>(
      environment.apiBaseURL + 'products/getbyid/?id=' + productId
    );
  }
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      environment.apiBaseURL + 'products/add',
      product
    );
  }
}
