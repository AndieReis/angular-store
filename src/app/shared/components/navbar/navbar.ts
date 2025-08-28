import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../core/services/authService';
import { CartService } from '../../../core/services/cartService';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatDivider,
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  auth = inject(AuthService);
  cartService = inject(CartService);
  router = inject(Router);

  logOut() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}
