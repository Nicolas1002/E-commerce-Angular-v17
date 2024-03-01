import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../../../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)
  constructor() { }

  getCategories(){
    return this.http.get<Category[]>('https://fakestoreapi.com/products/categories')
  }
}
