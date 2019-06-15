import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../modules/shared/shared.service';
import { SubSink } from 'subsink';
import { CartModel } from '../models/cart.model';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit, OnDestroy {
  public cart: CartModel;
  private basket: Product[];
  public basketCount: number;
  private subs = new SubSink();
  constructor(
    private sharedService: SharedService,
    private snackbar: MatSnackBar,
    private updates: SwUpdate
  ) { }

  ngOnInit() {

    this.basket = this.sharedService.getLocalBasket();
    if (this.basket) {
      this.basketCount = this.basket.length;
    }
    this.getCartItems();
    this.updateSW();
  }
  updateSW() {
    this.updates.available.subscribe(event => {
      const snack = this.snackbar.open('Update availabel', 'Reload');
      snack.onAction().subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
  getCartItems() {
    this.subs.add(
      this.sharedService.basketObservable.subscribe(data => {
        if (data) {
          this.basket = data;
          this.basketCount = data.length;
        }
      })
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
