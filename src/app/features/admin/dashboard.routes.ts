import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { AdminComponent } from './admin.component/admin.component';
import { UserManagementComponent } from './user-management.component/user-management.component';
import { ProductManagementComponent } from './product-management.component/product-management.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserManagementComponent,
      },
      {
        path: 'products',
        component: ProductManagementComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
