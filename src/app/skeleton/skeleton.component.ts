import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../modules/shared/shared.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit, OnDestroy {
  private cart: any;
  private cartCount: number;
  private subs = new SubSink();
  constructor(private cartService: SharedService) { }

  ngOnInit() {
    const getLocalCart = localStorage.getItem('cart');
    if (getLocalCart) {
      this.cart = JSON.parse(getLocalCart);
      this.cartCount = this.cart.length;
    } else {
      this.getCartItems();
    }

  }
  getCartItems() {
    this.subs.add(
      this.cartService.cartObservable.subscribe(data => {
        console.log(data);
        if (data) {
          this.cart = data;
          this.cartCount = data.length;
        }
      })
    );
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
