import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/products/products.module#ProductsModule',
      },
      {
        path: 'cart',
        loadChildren: './modules/cart/cart.module#CartModule',
      }
    ],
  },
  {
    path: '**',
    component: SkeletonComponent,
    data: { depth: 0 },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
