import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  removeFromCart(item: { product: Product, quantity: number }) {
    this.cartService.removeFromCart(item);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  incrementQuantity(item: { product: Product, quantity: number }) {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: { product: Product, quantity: number }) {
    this.cartService.decrementQuantity(item);
  }
}
