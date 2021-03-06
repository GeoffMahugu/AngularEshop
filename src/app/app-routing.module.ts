import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';

import { CanreadGuard } from './modules/auth/guards/canread.guard';
import { AdminGuard } from './modules/auth/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/landing/landing.module#LandingModule',
      },
      {
        path: 'products',
        loadChildren: './modules/products/products.module#ProductsModule',
      },
      {
        path: 'cart',
        loadChildren: './modules/cart/cart.module#CartModule',
      }
    ],
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule',
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AdminGuard]
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
