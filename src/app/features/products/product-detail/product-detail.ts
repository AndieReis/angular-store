import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../core/services/cartService';
@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  constructor(
    private dialogRef: MatDialogRef<ProductDetail>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private cartService: CartService
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.closeDialog();
  }
}
