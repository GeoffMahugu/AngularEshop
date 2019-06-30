import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartModel } from '../../../models/cart.model';
import { SharedService } from '../../shared/shared.service';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public cart: CartModel;
  private subs = new SubSink();
  public cartTotal: number;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart = this.sharedService.getLocalCart();
    if (this.cart) {
      this.cartTotal = this.cart.cartTotal;
    }

    this.subs.add(
      this.sharedService.cartObservable.subscribe(data => {
        console.log(data);
        this.cartTotal = data.cartTotal;
      })
    );
  }

  checkout() {
    // this.router.navigate(['/cart/checkout']);
    // localStorage.setItem('shipping', JSON.stringify(this.shippingFormGroup.value));
    this.sharedService.checkout();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }



}
