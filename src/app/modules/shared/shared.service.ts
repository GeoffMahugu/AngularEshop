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
    this.cart = this.getLocalCart();
  }

  getLocalBasket() {
    const getLocalBasket = localStorage.getItem('basket');
    if (getLocalBasket) {
      this.basket = JSON.parse(getLocalBasket);
    }
    this.basketSource.next(this.basket);
    return this.basket;
  }
  getLocalCart() {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      this.cart = JSON.parse(localCart);
    }
    this.cartSource.next(this.cart);
    return this.cart;
  }

  addToBasket(product: Product) {
    if (this.basket) {
      const checher = _.findIndex(this.basket, (item) => item.slug === product.slug);
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
      localStorage.setItem('basket', JSON.stringify(this.basket));
      this.getCart();
    }
  }
  removeFromBasket(product: Product) {
    this.basket = _.filter(this.basket, (item) => item.slug !== product.slug);
    this.basketSource.next(this.basket);
    this.snackbar.open('Product has been removed', 'CLOSE', { duration: 3000 });
    this.getCart();
    localStorage.setItem('basket', JSON.stringify(this.basket));
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

  slugifyText(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
}
