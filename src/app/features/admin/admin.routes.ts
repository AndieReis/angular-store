import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component/admin.component';
import { UserManagementComponent } from './user-management.component/user-management.component';
import { ProductManagementComponent } from './product-management.component/product-management.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
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
        redirectTo: 'admin',
        pathMatch: 'full',
      },
    ],
  },
];
