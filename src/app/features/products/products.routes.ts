import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductList,
  },

  { path: ':id', component: ProductDetail },
];
