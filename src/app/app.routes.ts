import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin-guard';
import { authGuard } from './core/guards/auth-guard';
import { HomeComponent } from './features/home.component/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
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
      import('./features/admin/admin.routes').then((r) => r.ADMIN_ROUTES),
    canActivate: [adminGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart.routes').then((r) => r.CART_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },

  {
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/not-found.component/not-found.component'
      ).then((c) => c.NotFoundComponent),
  },
];
