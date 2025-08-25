import { Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },
];
