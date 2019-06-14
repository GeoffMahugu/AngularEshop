import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../modules/shared/shared.service';
import { SubSink } from 'subsink';
import { CartModel } from '../models/cart.model';
import { Product } from '../models/product.model';
import { MatSnackBar } from '@angular/material';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

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
    private updates: SwUpdate,
    public push: SwPush
  ) { }

  ngOnInit() {

    this.basket = this.sharedService.getLocalBasket();
    if (this.basket) {
      this.basketCount = this.basket.length;
    }
    this.getCartItems();
    this.updateSW();
    this.receivePush();
  }
  updateSW() {
    this.updates.available.subscribe(event => {
      const snack = this.snackbar.open('Update availabel', 'Reload');
      snack.onAction().subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
    });
  }
  receivePush() {
    this.push.requestSubscription({ serverPublicKey: environment.publicKey })
      .then(PushSubscription => {
        console.log(':::::::::::::::::::::::::');
        console.log(PushSubscription.toJSON());
        console.log(':::::::::::::::::::::::::');
        localStorage.setItem('userTokem', JSON.stringify(PushSubscription.toJSON()));
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
