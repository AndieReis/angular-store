import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetail } from '../../../features/products/product-detail/product-detail';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: Product;
  private dialog = inject(MatDialog);

  openProductDetailDialog() {
    this.dialog.open(ProductDetail, {
      data: this.product,
    });
  }
}
