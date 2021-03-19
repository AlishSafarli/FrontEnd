import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://api.alishsafarli.com/api/';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<GenericResponseModel<Category>> {
    let path = this.apiUrl + 'categories/getall';
    return this.httpClient.get<GenericResponseModel<Category>>(path);
  }
}
