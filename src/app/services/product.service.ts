import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponseModel } from '../models/genericResponseModel';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44397/api/products';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<GenericResponseModel<Product>> {
    //Gelen data-ni GenericResponseModel<T>-e map edib, gelen data-nin bir observable oldugunu deyirik.
    return this.httpClient.get<GenericResponseModel<Product>>(this.apiUrl);
  }
}
