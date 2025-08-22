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
];
