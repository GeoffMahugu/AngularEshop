import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartModel } from '../../models/cart.model';
import { SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cart: CartModel;
  private basket: Product[];
  public basketSource = new Subject<Product[]>();
  public basketObservable = this.basketSource.asObservable();

  public cartSource = new Subject<CartModel>();
  public cartObservable = this.cartSource.asObservable();

  constructor(private router: Router, private snackbar: MatSnackBar, private push: SwPush) {
    this.basket = this.getLocalBasket();
    this.basketSource.next(this.basket);
    this.cart = this.getLocalCart();
    this.cartSource.next(this.cart);
  }

  getLocalBasket() {
    const getLocalBasket = localStorage.getItem('basket');
    if (getLocalBasket) {
      this.basket = JSON.parse(getLocalBasket);
    }
    return this.basket;
  }
  getLocalCart() {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      this.cart = JSON.parse(localCart);
    }
    return this.cart;
  }

  addToBasket(product: Product) {
    if (this.basket) {
      const checher = _.findIndex(this.basket, (item) => { return item.slug === product.slug; });
      if (checher === -1) {
        this.basket = [...this.basket, product];
        this.basketSource.next(this.basket);
        this.getCart();
        localStorage.setItem('basket', JSON.stringify(this.basket));
      } else {
        this.snackbar.open('Product already in Cart', 'CLOSE', { duration: 3000 });
      }
    } else {
      this.basketSource.next([product]);
      this.basket = [product];
      this.getCart();

    }
  }
  clearBasket() {
    this.basket = null;
    localStorage.removeItem('basket');
    this.basketSource.next([]);
    localStorage.removeItem('cart');

    const newCart = {
      basket: [],
      cartTotal: 0
    } as CartModel;
    this.cart = newCart;
    this.cartSource.next(newCart);

  }
  getCart() {
    const newCart = {
      basket: this.basket,
      cartTotal: 0
    } as CartModel;
    _.forEach(this.basket, (item) => {
      newCart.cartTotal += item.price;
    });
    this.cart = newCart;
    this.cartSource.next(this.cart);
    localStorage.setItem('cart', JSON.stringify(this.cart));

  }

  checkout() {
    this.clearBasket();
    this.snackbar.open('Thank you for shopping', 'CLOSE', { duration: 3000 });
    this.receivePush();
  }

  receivePush() {
    try {
      this.push.requestSubscription({ serverPublicKey: environment.publicKey })
        .then(PushSubscription => {
          localStorage.setItem('userTokem', JSON.stringify(PushSubscription.toJSON()));
        });
    } catch (e) {
      console.log(e);
    }
  }
}
