import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetail } from '../product-detail/product-detail';
import { CartService } from '../../../core/services/cartService';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  private cartService = inject(CartService);
  @Input() product!: Product;
  private dialog = inject(MatDialog);

  openProductDetailDialog() {
    this.dialog.open(ProductDetail, {
      data: this.product,
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
