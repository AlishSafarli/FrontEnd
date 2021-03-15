import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://localhost:44397/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<GenericResponseModel<Category>> {
    return this.httpClient.get<GenericResponseModel<Category>>(this.apiUrl);
  }
}
