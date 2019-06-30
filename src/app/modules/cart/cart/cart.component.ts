import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../../../models/countries.model';
import { CartModel } from '../../../models/cart.model';
import { SharedService } from '../../shared/shared.service';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  public cart: CartModel;
  public basketCount: number;
  private subs = new SubSink();
  public shippingFormGroup: FormGroup;
  public countries: any[];
  public cartTotal: number;
  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart = this.sharedService.getLocalCart();
    if (this.cart) {
      this.basketCount = this.cart.basket.length;
      this.cartTotal = this.cart.cartTotal;
    }
    this.updateCart();
    this.countries = Countries;
    this.shippingFormGroup = this.formBuilder.group({
      address_1: ['', Validators.required],
      address_2: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phone_number: ['', Validators.required],
      details: [''],
    });

    const getShipping = localStorage.getItem('shipping');
    if (getShipping) {
      const shippingDetails = JSON.parse(getShipping);
      this.setFormValues(shippingDetails);
    }
    this.subs.add(
      this.sharedService.cartObservable.subscribe(data => {
        console.log(data)
        this.cartTotal = data.cartTotal;
      })
    );
    // const getCart = this.sharedService.getLocalCart();
  }
  setFormValues(value) {
    this.shippingFormGroup.controls['address_1'].setValue(value.address_1);
    this.shippingFormGroup.controls['address_2'].setValue(value.address_2);
    this.shippingFormGroup.controls['country'].setValue(value.country);
    this.shippingFormGroup.controls['city'].setValue(value.city);
    this.shippingFormGroup.controls['state'].setValue(value.state);
    this.shippingFormGroup.controls['zip'].setValue(value.zip);
    this.shippingFormGroup.controls['phone_number'].setValue(value.phone_number);
    this.shippingFormGroup.controls['details'].setValue(value.details);
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
    this.router.navigate(['/cart/checkout']);
    localStorage.setItem('shipping', JSON.stringify(this.shippingFormGroup.value));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
