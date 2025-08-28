import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiURL = 'https://fakestoreapi.com';

  constructor() {}

  getProducts() {
    return this.http.get<Product[]>(`${this.apiURL}/products`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`);
  }

  createProduct(productData: Partial<Product>) {
    return this.http.post<Product>(`${this.apiURL}/products`, productData);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.apiURL}/products/${id}`);
  }

  updateProduct(id: number, productData: Partial<Product>) {
    return this.http.put<Product>(`${this.apiURL}/products/${id}`, productData);
  }
}
