import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cart: any;
  public cartSource = new Subject<Product[]>();
  public cartObservable = this.cartSource.asObservable();

  constructor(private router: Router, private snackbar: MatSnackBar) {
    const getLocalCart = localStorage.getItem('cart');
    if (getLocalCart) {
      this.cart = JSON.parse(getLocalCart);
    }
  }

  addToCart(product: Product) {
    if (this.cart) {
      const checher = _.findIndex(this.cart, (item) => { return item.slug === product.slug; });
      if (checher === -1) {
        this.cart = [...this.cart, product];
        this.cartSource.next(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      } else {
        this.snackbar.open('Product already in Cart', 'CLOSE', { duration: 3000 });
      }
    } else {
      this.cartSource.next([product]);
      this.cart = [product];
    }
  }
  clearCart() {
    this.cart = null;
    localStorage.removeItem('cart');
    this.cartSource.next([]);
  }
}
