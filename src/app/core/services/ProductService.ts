import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiURL = 'https://fakestoreapi.com';

  constructor() {}

  getProducts() {
    return this.http.get<any[]>(`${this.apiURL}/products`);
  }

  getProductsById(id: number) {
    return this.http.get<any[]>(`${this.apiURL}/products/${id}`);
  }
}
