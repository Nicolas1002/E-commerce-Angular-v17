import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product}  from './../../../../models/product.interface'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input({required:true}) product!:Product


@Output() addToCart = new EventEmitter()


addToCartHandler(){

  this.addToCart.emit(this.product)
}
}