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
  public cart: CartModel;
  public basketCount: number;
  private subs = new SubSink();
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.cart = this.sharedService.getLocalCart();
    if (this.cart) {
      this.basketCount = this.cart.basket.length;
    }
    this.updateCart();
  }
  updateCart() {
    this.subs.add(
      this.sharedService.cartObservable.subscribe(data => {
        this.cart = data;
        this.basketCount = this.cart.basket.length;

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
