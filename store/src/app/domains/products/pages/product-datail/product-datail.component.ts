import { Component, Input, inject, signal } from '@angular/core';
import { ProductService } from '@shared/services/product.service';
import { Product } from '../../../../models/product.interface';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-product-datail',
  standalone: true,
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './product-datail.component.html',
  styleUrl: './product-datail.component.css'
})
export default class ProductDatailComponent {
  @Input() id? :string
  product = signal<Product |  null >(null)
  cover = signal('')
  private getProduct = inject(ProductService)
  private cartService = inject(CartService)

  ngOnInit(){
    if(this.id){
      this.getProduct.getOne(this.id).subscribe(
        {
          next : (product) => {
            this.product.set(product)

            if(product.image.length > 0){
              this.cover.set(product.image[0])
            }


          }
        }
      )
    }
  }


chageCover(img : string){
  this.cover.set(img)
}
addTocart(){
const product = this.product()
if(product){
  this.cartService.addToCart(product)

}
}
}
