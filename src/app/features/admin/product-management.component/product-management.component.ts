import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../core/services/ProductService';
import { ProductFormComponent } from '../product-form.component/product-form.component';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog.component/confirm-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-product-management',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
})
export class ProductManagementComponent implements OnInit {
  private productService = inject(ProductService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openCreateForm(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.createProduct(result).subscribe({
          next: (newProduct) => {
            this.products = [...this.products, newProduct];
            this.snackBar.open('Produto criado com sucesso!', 'Fechar', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          },
          error: (err) => {
            this.snackBar.open('Erro ao criar o produto.', 'Fechar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  openEditForm(product: Product): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '600px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.updateProduct(product.id, result).subscribe({
          next: (updatedProduct) => {
            this.products = this.products.map((p) =>
              p.id === updatedProduct.id ? updatedProduct : p
            );

            this.snackBar.open('Produto atualizado com sucesso!', 'Fechar', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          },
          error: (err) => {
            this.snackBar.open('Erro ao atualizar o produto.', 'Fechar', {
              duration: 3000,
            });
          },
        });
      }
    });
  }

  deleteProduct(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirmar Exclusão',
        message:
          'Você tem certeza que deseja deletar este produto? Esta ação não pode ser desfeita.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Se o resultado for 'true' (usuário clicou em Confirmar)
      if (result) {
        this.productService.deleteProduct(id).subscribe({
          next: () => {
            this.products = this.products.filter(
              (product) => product.id !== id
            );
            this.snackBar.open('Produto deletado com sucesso!', 'Fechar', {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          },
          error: (err) => {
            this.snackBar.open('Erro ao deletar o produto.', 'Fechar', {
              duration: 5000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['snackbar-error'],
            });
          },
        });
      }
    });
  }
}
