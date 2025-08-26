import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const adminUser = 'johnd';

  if (authService.isLoggedIn() && authService.currentUser() === adminUser) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
