import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    CartComponent
  ]
})
export class CartModule { }
