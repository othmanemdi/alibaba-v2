import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems!: Cart[];

  constructor() {
    this.cartItems = this.getCart()
  }

  getCart() {
    let cartData = localStorage.getItem('cart');
    if (cartData) {
      return this.cartItems = JSON.parse(cartData);
    }
  }

  addToCart(product: Product) {
    let item = this.cartItems.find(item => item.product === product);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(item: Cart) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  incrementQuantity(item: Cart) {
    item.quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  decrementQuantity(item: Cart) {
    if (item.quantity > 1) {
      item.quantity--;
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
