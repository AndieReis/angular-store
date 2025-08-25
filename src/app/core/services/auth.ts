import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  private router = inject(Router);

  isLoggedIn = signal<boolean>(false);

  constructor() {
    if (this.getToken()) {
      this.isLoggedIn.set(true);
    }
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.isLoggedIn.set(true);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
