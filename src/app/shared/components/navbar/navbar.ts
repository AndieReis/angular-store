import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/authService';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  auth = inject(AuthService);

  logOut() {
    this.auth.logout();
  }
}
