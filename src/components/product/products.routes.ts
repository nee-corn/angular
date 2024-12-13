import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products-list/products-list.component').then(
        (m) => m.ProductsListComponent
      ),
    resolve: {
      products: () => inject(HttpClient).get('/products'),
    },
  },
];
