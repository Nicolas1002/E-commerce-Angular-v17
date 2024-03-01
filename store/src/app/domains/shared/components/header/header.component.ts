import { Component, Injectable, Input,  SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../../../models/product.interface';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLinkWithHref, RouterLinkActive ,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 private cartService = inject(CartService)

 cart = signal<boolean>(true)
 cartToProducts = this.cartService.cart
 totalProducts = this.cartService.total





 openCard(event : Event){
  this.cart.set(!this.cart())
 }
}
