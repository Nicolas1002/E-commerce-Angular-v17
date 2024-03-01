import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Product } from '../../../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient)

  getProducts(category? : string){

    if(category){
      console.log( typeof(category))
      return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)


    }
    console.log(category)
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`)
  }
  getOne(id: string){
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
  // getProducts(){
  //   return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  // }
  // getOne(id: string){
  //   return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
  // }
}
