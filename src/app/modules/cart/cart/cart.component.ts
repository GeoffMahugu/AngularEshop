import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartModel } from '../../../models/cart.model';
import { SharedService } from '../../shared/shared.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cart: CartModel;
  private subs = new SubSink();
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.cart = this.sharedService.getLocalCart();
    console.log('CART::::::::::::::::');
    console.log(this.cart);
    this.updateCart();
  }
  updateCart() {
    this.subs.add(
      this.sharedService.cartObservable.subscribe(data => {
        console.log('@@@@@@@@@@@@@@', data);
        this.cart = data;
      })
    );
  }
  checkout() {
    this.sharedService.checkout();
  }

  // addToCart(product: Product) {
  //   this.sharedService.addToCart(product);
  // }

}
