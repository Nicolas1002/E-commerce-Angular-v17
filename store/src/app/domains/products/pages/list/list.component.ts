import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '../../../../models/product.interface';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '../../../../models/category.interface';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ ProductComponent, HeaderComponent, RouterLinkWithHref, RouterLinkActive, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
   productToCart = signal<Product[]>([])
   categories = signal<Category[]>([])
   private cartService = inject(CartService)
   private productService = inject(ProductService)
   private categoryService = inject(CategoryService)
   @Input() category?: string

 ngOnInit(){
  this.getCategories()


 }

 ngOnChanges(changes : SimpleChanges){
    const category = changes["category"]


      this.getProducts(this.category)



 }
 getProducts(category? : string){
  this.productService.getProducts(category).subscribe({
    next: (product) => {
      this.productToCart.set(product)

    },
    error: () =>{
      console.log('algo salio mal')
    }


  })

 }

 getCategories(){
  this.categoryService.getCategories().subscribe({
    next: (data) => {
      this.categories.set(data)
    }
  })

 }

  addToCart(product: Product){
    this.cartService.addToCart(product)
  }

}
