import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./features/products/products.routes').then(
        (r) => r.PRODUCTS_ROUTES
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./shared/components/about/about.routes').then(
        (r) => r.ABOUT_ROUTES
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES),
    canActivate: [adminGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.routes').then((r) => r.CART_ROUTES),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },
];
