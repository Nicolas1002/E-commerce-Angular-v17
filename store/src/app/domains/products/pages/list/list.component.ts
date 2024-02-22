import { Component, Input, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '../../../../models/product.interface';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   productToCart = signal<Product[]>([])
   private cartService = inject(CartService)
   private productService = inject(ProductService)

 ngOnInit(){
  this.productService.getProducts().subscribe({
    next: (product) => {
      this.productToCart.set(product)
    },
    error: () =>{
      console.log('algo salio mal')
    }


  })


 }


  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

}
