import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { GenericResponseModel } from '../models/genericResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<GenericResponseModel<Category>> {
    let path = environment.apiBaseURL + 'categories/getall';
    return this.httpClient.get<GenericResponseModel<Category>>(path);
  }
}
