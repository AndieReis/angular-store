import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  private router = inject(Router);

  isLoggedIn = signal<boolean>(false);
  currentUser = signal<string | null>(null);

  constructor() {
    const token = this.getToken();
    const user = this.getUser();

    if (token && user) {
      this.isLoggedIn.set(true);
      this.currentUser.set(user);
    }
  }

  login(credentials: { username: string; password: string }) {
    this.saveUser(credentials.username);
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
    this.isLoggedIn.set(true);
  }

  saveUser(user: string) {
    localStorage.setItem('authUser', user);
    this.currentUser.set(user);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getUser(): string | null {
    return localStorage.getItem('authUser');
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
