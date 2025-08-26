import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<Product[]>([]);

  constructor() {}

  addToCart(product: Product) {
    this.cartItems.update((items) => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cartItems.update((items) =>
      items.filter((item) => item.id !== productId)
    );
  }
}
