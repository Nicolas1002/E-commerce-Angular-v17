import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([])
  total = computed(() => {
    const cart = this.cart()
    return   cart.reduce((total, producto) => total + producto.price, 0)

  })
  constructor() {

  }
  addToCart(product: Product){
    this.cart.update(state => [...state, product])
  }
}
