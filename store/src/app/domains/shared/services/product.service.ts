import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Product } from '../../../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient)

  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  }
}
